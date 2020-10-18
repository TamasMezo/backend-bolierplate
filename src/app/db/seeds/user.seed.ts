import * as Bluebird from 'bluebird';
import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../../entities/user.entity';

const users = [
  {
    email: 'test@test.com',
    password: '2245',
  },
];

export default class CreateUsers implements Seeder {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  public async run(factory: Factory): Promise<any> {
    await Bluebird.map(users, user => factory(User)(user).create());
  }
}
