export type ClientType = {
  id?: number;
  name: string;
  status: string;
}

export type ClientStateType = {
  currentClients: ClientType[];
}
