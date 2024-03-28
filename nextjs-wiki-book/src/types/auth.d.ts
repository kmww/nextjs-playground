export interface SigninParams {
  username: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  displayName: string;
  email: string;
  profileImageUrl: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
