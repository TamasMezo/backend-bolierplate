import { define } from 'typeorm-seeding';
import { User } from '../../entities';
import * as Faker from 'faker';

export interface UserFactorySettings {
  email?: string;
  password?: string;
  lastLogin?: Date;
}

define(User, (faker: typeof Faker, settings?: UserFactorySettings) => {
  const user = new User();
  user.email = settings?.email || faker.internet.email();
  user.password = settings?.password || faker.internet.password();
  user.lastLogin = settings?.lastLogin || faker.date.past();
  return user;
});
