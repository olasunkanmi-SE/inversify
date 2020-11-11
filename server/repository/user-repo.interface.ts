export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface getUsersService {
  getUsers(): User[];
  updateUser(id: string, user: User): User;
  getUserById(id: string): User;
  createUser(user: User): User;
  deleteUser(id: string): User[];
}
