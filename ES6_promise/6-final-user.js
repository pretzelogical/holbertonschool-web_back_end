import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promiseResults = [];
  try {
    const userRes = await signUpUser(firstName, lastName);
    promiseResults.push({
      status: 'fufilled', value: {
        firstName,
        lastName,
      }
    });
    await uploadPhoto(fileName);
  } catch (err) {
    promiseResults.push({
      status: 'rejected',
      value: err.toString(),
    });
  }
  return promiseResults;
}
