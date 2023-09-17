import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let logString = '';
  return uploadPhoto()
    .then((res) => {
      logString += res.body;
      return createUser();
    })
    .then((res) => {
      logString += ` ${res.firstName} ${res.lastName}`;
      console.log(logString);
    })
    .catch(() => console.log('Signup system offline'));
}
