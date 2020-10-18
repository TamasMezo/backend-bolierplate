import { dependency } from '@foal/core';
import { Query, Resolver } from 'type-graphql';
import { User } from '../entities';
import { UserService } from '../services/user.service';

@Resolver(User)
export class UserResolver {
  @dependency
  userService: UserService;

  @Query(() => [User])
  async listUsers(): Promise<User[]> {
    return await this.userService.listUsers();
  }
}
