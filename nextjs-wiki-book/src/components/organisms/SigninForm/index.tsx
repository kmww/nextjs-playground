export interface SigninFormData {
  username: string;
  password: string;
}

interface SigninFormProps {
  onSingin?: (username: string, password: string) => void;
}


