import { PickType } from '@nestjs/swagger';
import { IUser } from './user.interface';

export class UserInfoDto extends PickType(IUser, ['account'] as const) {
  /**
   * @example 'cbb'
   */
  account: string;
}
