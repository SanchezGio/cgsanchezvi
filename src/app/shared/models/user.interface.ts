export type Roles = 'SUSCRIPTOR' | 'ADMIN';

export class User {
  username: string;
  password: string;
}

export interface UserResponse extends User {
  error: number;
  message: string;
  values: any;
  token: string;
  userId: number;
  role: Roles;
}
