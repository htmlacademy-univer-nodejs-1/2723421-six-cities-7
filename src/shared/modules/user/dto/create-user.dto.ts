import type { UserType } from '../../../../types/user.type.js';

export interface CreateUserDto {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  type: UserType;
}
