import type { UserEntity } from './user.entity.js';
import type { CreateUserDto } from './dto/create-user.dto.js';

export interface UserService {
  create(dto: CreateUserDto): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity | null>;
  findOrCreate(user: UserEntity): Promise<string>;
  findById(id: string): Promise<UserEntity | null>;
}
