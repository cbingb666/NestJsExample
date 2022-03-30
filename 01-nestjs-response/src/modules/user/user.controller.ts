import { API_CODES } from 'src/const/api.const';
import { IUser } from './user.interface';
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInfoDto } from './user.dto';
import {
  SwaggerErr,
  SwaggerOk,
  SwaggerPagerOk,
} from 'src/decorators/swagger.decorator';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('info')
  @SwaggerOk(IUser)
  @SwaggerErr(API_CODES.USER_NO_EXIST)
  info(@Body() userInfoDto: UserInfoDto) {
    return this.userService.info(userInfoDto);
  }

  @Post('list')
  @SwaggerPagerOk(IUser)
  list() {
    return this.userService.list();
  }
}
