import { injectable } from 'inversify';

import type { UserService } from './user.service.interface.js';
import { UserEntity } from './user.entity.js';
import { UserModel } from './user.model.js';
import { CreateUserDto } from './dto/create-user.dto.js';

@injectable()
export class DefaultUserService implements UserService {
  public async create(dto: CreateUserDto): Promise<UserEntity> {
    const document = await UserModel.create(dto);

    return new UserEntity({
      name: document.name,
      email: document.email,
      avatar: document.avatar,
      password: document.password,
      type: document.type
    });
  }

  public async findByEmail(email: string): Promise<UserEntity | null> {
    const document = await UserModel.findOne({ email });

    if (document === null) {
      return null;
    }

    return new UserEntity({
      name: document.name,
      email: document.email,
      avatar: document.avatar,
      password: document.password,
      type: document.type
    });
  }

  public async findOrCreate(user: UserEntity): Promise<string> {
    const existedUser = await UserModel.findOne({
      email: user.email
    });

    if (existedUser !== null) {
      return existedUser._id.toString();
    }

    const newUser = await UserModel.create(user);

    return newUser._id.toString();
  }

  public async findById(id: string): Promise<UserEntity | null> {
    const document = await UserModel.findById(id);

    if (document === null) {
      return null;
    }

    return new UserEntity({
      name: document.name,
      email: document.email,
      avatar: document.avatar,
      password: document.password,
      type: document.type
    });
  }
}
