export enum UserTypes {
  ADMIN = 'ADMIN',
  ROOT = 'ROOT',
  COMMON_USER = 'COMMON_USER',
}

export class UserEntity {
  id: string;

  name: string;

  email: string;

  phone: string;

  cpf: string;

  password: string;

  userType: UserTypes;

  createdAt: Date;

  updatedAt: Date;
}
