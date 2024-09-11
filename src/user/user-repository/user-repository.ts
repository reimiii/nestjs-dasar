import { Connection } from '../connection/connection';

export class UserRepository {
  connection: Connection;

  save(): void {
    console.info(`save user with connection: ${this.connection.getName()}`);
  }
}

export function createUserRepository(connection: Connection): UserRepository {
  const repository: UserRepository = new UserRepository();
  repository.connection = connection;

  return repository;
}
