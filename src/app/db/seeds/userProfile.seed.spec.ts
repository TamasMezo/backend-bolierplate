import { createConnection } from 'typeorm';
import { useSeeding, runSeeder, useRefreshDatabase, tearDownDatabase } from 'typeorm-seeding';
import CreateUserProfile from './userProfile.seed';
import { UserProfile } from '../../entities';
import { expect } from 'chai';

// TODO fix seed testing
describe.skip('Create User Seed', () => {
  before(async () => {
    await createConnection();
    await useRefreshDatabase();
    await useSeeding();
  });

  after(async () => {
    await tearDownDatabase();
  });

  it('seed should work', async function () {
    await runSeeder(CreateUserProfile);
    const result = await UserProfile.find();
    expect(result).to.have.length(1);
  });
});
