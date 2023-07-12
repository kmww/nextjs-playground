interface SignDataType {
  uuid: string;
  created_at: String;
  content: string;
  nickname: string;
  country: string;
}

export interface SignQueryDataType {
  sign: SignDataType[];
}
