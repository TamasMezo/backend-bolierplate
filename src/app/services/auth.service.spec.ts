import { createConnection, getConnection } from 'typeorm';
import { createService } from '@foal/core';
import { useSeeding, useRefreshDatabase } from 'typeorm-seeding';
import { expect } from 'chai';
import * as faker from 'faker';

import { AuthService } from './auth.service';

describe('Auth service', () => {
  before(async () => {
    await createConnection();
    await useRefreshDatabase();
    await useSeeding();
  });

  after(async () => {
    await getConnection().close();
  });

  describe('#Auth service', () => {
    it('#has a signup method which creates a user', async function () {
      const service = createService(AuthService);

      const createUserInput = {
        email: faker.internet.email(),
        password: '123456',
        firstName: 'hello',
        lastName: 'bye',
        userName: faker.name.firstName(),
      };

      const response = await service.signUp(createUserInput);

      expect(response).to.be.a('string');
    });
  });
});
