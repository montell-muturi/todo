export interface IUser {
  username?: string;
  email: string;
  password: string;
}

export interface ITodos {
  userId: string;
  dateCreated: string;
  title: string;
  items?: [IItem];
}

export interface IItem {
  title: string;
  isChecked: boolean;
}
