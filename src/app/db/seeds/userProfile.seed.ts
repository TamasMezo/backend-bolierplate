import * as Bluebird from 'bluebird';
import { Factory, Seeder } from 'typeorm-seeding';
import { UserProfile } from '../../entities';
import { userProfiles } from '../user.fixture';

export default class CreateUserProfile implements Seeder {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  public async run(factory: Factory): Promise<any> {
    await Bluebird.map(userProfiles, userProfile => factory(UserProfile)(userProfile).create());
  }
}
