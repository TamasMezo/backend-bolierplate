import { User } from '../entities';

export class UserService {
  async listUsers() {
    return await User.find();
  }
}
