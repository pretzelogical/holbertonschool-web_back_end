export default function handleResponseFromAPI(promise) {
  const retBody = { status: 200, body: 'success' };
  return promise
    .then(() => retBody)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
