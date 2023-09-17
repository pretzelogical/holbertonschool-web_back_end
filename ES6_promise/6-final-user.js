import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userRes = await signUpUser(firstName, lastName)
    .then((response) => ({ status: 'fulfilled', value: response }))
    .catch((error) => ({ status: 'rejected', value: error }));

  const photoRes = await uploadPhoto(fileName)
    .catch((error) => ({
      status: 'rejected',
      value: `${error.name}: ${error.message}`,
    }));

  return [userRes, photoRes];
}
