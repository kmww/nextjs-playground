interface SignUpFormData {
  email: string;
  username: string;
  password: string;
  displayName: string;
}

interface SignUpFormProps {
  onSignUp?: (
    email: string,
    username: string,
    password: string,
    displayName: string,
  ) => void;
}
