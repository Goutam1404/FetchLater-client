import API from "./index.ts";

interface UserInputProps {
  username?: string;
  email: string;
  password: string;
}
export async function registerUser({
  username,
  email,
  password,
}: UserInputProps) {
  console.log(username + " " + email + " " + password);
  const res = await API.post(`/api/v1/auth`, {
    username,
    email,
    password,
  });
  console.log(res);
  console.log(res.data);
}

export async function loginUser({ email, password }: UserInputProps) {
  const res = await API.post(`/api/v1/auth/login`, {
    email,
    password,
  });
  console.log(res);
  console.log(res.data.user);
}
export async function getUser() {
  const res = await API.get(`/api/v1/auth`);
  console.log(res);
  console.log(res.data.user);
}

export async function logOutUser() {
  const res = await API.post(`/api/v1/auth/logout`);
  console.log(res);
  console.log(res.data);
}
