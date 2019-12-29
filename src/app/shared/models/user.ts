export interface User {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
  photoURL?: string;
}
export class User {
  constructor(
    public id?: string,
    public name?: string,
    public email?: string,
    public role?: string,
    public photoURL?: string
  ) { }
}
