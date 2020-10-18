import { define, factory } from 'typeorm-seeding';
import { UserProfile, User } from '../../entities';
import * as Faker from 'faker';

export interface UserProfileFactorySettings {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  user?: User;
}

define(UserProfile, (faker: typeof Faker, settings?: UserProfileFactorySettings) => {
  const userProfile = new UserProfile();
  userProfile.userName = settings?.userName || faker.name.firstName();
  userProfile.firstName = settings?.firstName || faker.name.firstName();
  userProfile.lastName = settings?.lastName || faker.name.lastName();
  userProfile.user =
    settings?.user ||
    (factory(User)({
      email: settings?.email,
      password: settings?.password,
    }) as any);
  return userProfile;
});
