import { SET_CURRENT_USER } from "./mutation-types";
import { AuthStateType, UserInfoType } from "./types";

export const AuthMutations = {
  [SET_CURRENT_USER]: (
    state: AuthStateType,
    payload: UserInfoType
  ): void => {
    state.currentUser = payload;
  },
};


