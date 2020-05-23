interface IUser {
  id: string;
  timezone: string;
  name: IName;
  location: ILocation;
}
interface IName {
  first: string;
  last: string;
}
interface ILocation {
  state: string;
  city: string;
  zipcode: string;
}

export default IUser;
