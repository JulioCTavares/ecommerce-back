import { CreateUserDto } from './dtos/createUser.dto';
import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from '@prisma/client';
import { UserTypes } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;

    const passwordHashed = await hash(createUserDto.password, saltOrRounds);

    const user = {
      ...createUserDto,
      id: randomUUID(),
      password: passwordHashed,
      userType: UserTypes.ADMIN as string,
    };

    await this.prisma.user.create({
      data: user,
    });

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
