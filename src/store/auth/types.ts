export type LoginPayloadType = {
  username: string;
  password: string;
}

export type UserInfoType = {
  accessToken: string;
  userID: number;
  username: string;
}

export type AuthStateType = {
  currentUser: UserInfoType
}
