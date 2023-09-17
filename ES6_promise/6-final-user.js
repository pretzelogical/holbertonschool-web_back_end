import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promiseResults = [];
  signUpUser(firstName, lastName)
    .then((res) => {
      promiseResults.push({
        status: 'resolved',
        value: {
          firstName: res.firstName,
          lastName: res.lastName,
        },
      });
      return uploadPhoto(fileName);
    }).catch((err) => {
      promiseResults.push({
        status: 'error',
        value: err,
      });
      console.log(promiseResults);
    });
  return new Promise((resolve, reject) => {
    resolve(promiseResults);
    reject(new Error());
  });
}
