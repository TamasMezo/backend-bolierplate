import { dependency, ServiceManager, TokenOptional } from '@foal/core';
import { GraphQLController } from '@foal/graphql';
import { TypeORMStore, fetchUser } from '@foal/typeorm';
import { buildSchema } from 'type-graphql';

import { UserResolver, AuthResolver } from '../graphql';

import { User } from '../entities';

@TokenOptional({
  store: TypeORMStore,
  user: fetchUser(User),
  cookie: false,
})
export class ApiController extends GraphQLController {
  @dependency
  private services: ServiceManager;

  schema = buildSchema({
    resolvers: [AuthResolver, UserResolver],
    container: { get: className => this.services.get(className) },
    //authChecker: (...args) => authChecker(this.services.get(ConnectionService))(...args),
  });
}
