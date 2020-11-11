import { User } from "./../model/User";
export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface UsersQuery {
  getUsers(): User[];
  updateUser(id: string, user: User): User;
  getUserById(id: string): User;
  createUser(user: User): User;
  deleteUser(id: string): User[];
}
