import { User } from "./../model/User";
import { injectable } from "inversify";
import { UsersQuery } from "./user-repo.interface";

@injectable()
export class UserService implements UsersQuery {
  users: User[] = [
    {
      id: "1",
      name: "olasunkanmi",
      email: "ola@gmail.com",
      password: "$%&**^^%%^&*",
    },
    {
      id: "2",
      name: "abel",
      email: "abel@gmail.com",
      password: "$%&**^^%%^&*",
    },
  ];

  public async getUsers(): Promise<User[]> {
    return await this.users;
  }

  public async getUserById(id: string): Promise<User> {
    let users = this.getUsers();
    let user: any = (await users).find((user) => user.id === id);
    return user;
  }

  public createUser(user: User): User {
    this.users.push(user);
    return user;
  }

  public deleteUser(id: string): User[] {
    return this.users.filter((user) => user.id !== id);
  }

  public updateUser(id: string, updatedUser: User): any {}
}
