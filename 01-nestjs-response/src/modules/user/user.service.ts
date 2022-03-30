import { Injectable } from '@nestjs/common';
import { API_CODES } from 'src/const/api.const';
import { Api } from 'src/utils/api';
import { UserInfoDto } from './user.dto';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  private dbUsers: IUser[] = [
    {
      account: '111111',
      nickname: 'cbb',
      age: 18,
    },
    {
      account: '222222',
      nickname: 'cbb',
      age: 18,
    },
    {
      account: '333333',
      nickname: 'cbb',
      age: 18,
    },
    {
      account: '444444',
      nickname: 'cbb',
      age: 18,
    },
    {
      account: '555555',
      nickname: 'cbb',
      age: 18,
    },
  ];

  /**
   * 查询用户信息
   */
  info(userInfoDto: UserInfoDto) {
    const user = this.dbUsers.find(
      (user) => user.account === userInfoDto.account,
    );

    if (user) {
      // 成功 - 查询到用户
      return Api.ok(user);
    } else {
      // 错误 - 查询的用户不存在
      return Api.err(API_CODES.USER_NO_EXIST);
    }
  }

  /**
   * 用户列表
   */
  list() {
    return Api.pagerOk({
      list: this.dbUsers,
      page: 1,
      limit: 10,
      total: this.dbUsers.length,
    });
  }
}
