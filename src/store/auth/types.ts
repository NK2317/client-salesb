export type LoginPayloadType = {
  username: string;
  password: string;
}

export type UserInfoType = {
  accessToken: string;
  userID: number;
  userName: string;
}

export type AuthStateType = {
  currentUser: UserInfoType
}
