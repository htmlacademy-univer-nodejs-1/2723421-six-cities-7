import type { UserEntity } from './user.entity.js';

export interface UserService {
  create(user: UserEntity): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity | null>;
  findOrCreate(user: UserEntity): Promise<string>;
  findById(id: string): Promise<UserEntity | null>;
}
