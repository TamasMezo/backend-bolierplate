import { dependency } from '@foal/core';
import { GraphQLError } from 'graphql';
import { Arg, Resolver, Mutation } from 'type-graphql';
import { AuthService } from '../services';
import { CreateUserInput, LoginUserInput } from './types/user';

@Resolver()
export class AuthResolver {
  @dependency
  authService: AuthService;

  @Mutation(() => String)
  async signUpUser(@Arg('createUserInput') createUserInput: CreateUserInput): Promise<string> {
    return await this.authService.signUp(createUserInput);
  }

  @Mutation(() => String)
  async loginUser(@Arg('loginUserInput') loginUserInput: LoginUserInput): Promise<string | GraphQLError> {
    return await this.authService.loginUser({ ...loginUserInput });
  }
}
