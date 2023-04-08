import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  async findAll(): Promise<UserModel[]> {
    return await this.userService.getAllUsers();
  }
}
