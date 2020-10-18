import { Config, hashPassword, verifyPassword } from '@foal/core';
import { GraphQLError } from 'graphql';
import { sign } from 'jsonwebtoken';
import { User } from '../entities';
import { UserProfile } from '../entities/userProfile.entity';
import { CreateUserInput, LoginUserInput } from '../graphql/types/user';

export class AuthService {
  async loginUser({ email, password }: LoginUserInput) {
    const user = await User.findOneOrFail({ where: { email } });
    console.log(user);
    const isValidUser = await verifyPassword(password, user.password);
    if (user && isValidUser) {
      user.lastLogin = new Date();
      await user.save();
      return this.generateLoginResponse(user);
    }
    return new GraphQLError('Autchentication failed');
  }

  async signUp({ email, password, userName, firstName, lastName }: CreateUserInput) {
    const user = new User();
    user.email = email;
    user.password = await hashPassword(password);
    user.lastLogin = new Date();
    const userProfile = await this.creatUserProfile(userName, firstName, lastName);
    user.userProfile = userProfile;
    await user.save();
    return this.generateLoginResponse(user);
  }

  async creatUserProfile(userName: string, firstName: string, lastName: string) {
    const userProfile = new UserProfile();
    (userProfile.firstName = firstName),
      (userProfile.lastName = lastName),
      (userProfile.userName = userName),
      await userProfile.save();
    return userProfile;
  }

  private async generateLoginResponse(user: User): Promise<string> {
    const payload = {
      email: user.email,
      id: user.id,
    };
    const secret = Config.get<string>('settings.jwt.secretOrPublicKey');
    const token = await new Promise<string>((resolve, reject) => {
      sign(payload, secret, { subject: user.id.toString() }, (err, value: string) => {
        if (err) {
          return reject(err);
        }
        resolve(value);
      });
    });

    return token;
  }
}
