import { model } from 'mongoose';

import { UserSchema } from './user.schema.js';

export const UserModel = model('User', UserSchema);
