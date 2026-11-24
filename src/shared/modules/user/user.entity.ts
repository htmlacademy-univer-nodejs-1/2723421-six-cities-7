import type { UserType } from '../../../types/user.type.js';

export class UserEntity {
  public name: string;
  public email: string;
  public avatar?: string;
  public password: string;
  public type: UserType;

  constructor(user: UserEntity) {
    this.name = user.name;
    this.email = user.email;
    this.avatar = user.avatar;
    this.password = user.password;
    this.type = user.type;
  }
}
