import { User } from "./../model/User";
import { injectable } from "inversify";
import { UsersQuery } from "./user-repo.interface";

@injectable()
export class UserService implements UsersQuery {
  users: User[] = [];

  public getUsers(): User[] {
    return this.users;
  }

  public getUserById(id: string): User {
    let users = this.getUsers();
    let user: any;
    user = users.find((user) => user.id === id);
    return user;
  }

  public createUser(user: User): User {
    this.users.push(user);
    return user;
  }

  public deleteUser(id: string): User[] {
    return this.users.filter((user) => user.id !== id);
  }

  public updateUser(id: string, updatedUser: User): User {
    let user = this.getUserById(id);
    user.name = updatedUser.name;
    user.email = updatedUser.email;
    user.password = updatedUser.password;
    return user;
  }
}
