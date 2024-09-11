// import { Connection } from '../connection/connection';

import { PrismaService } from '../../prisma/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {
    console.info('create user repository');
  }

  async save(firstName: string, lastName: string): Promise<User> {
    return this.prismaService.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    });
  }

  // connection: Connection;
  //
  // save(): void {
  //   console.info(`save user with connection: ${this.connection.getName()}`);
  // }
}

// export function createUserRepository(connection: Connection): UserRepository {
//   const repository: UserRepository = new UserRepository();
//   repository.connection = connection;
//
//   return repository;
// }
