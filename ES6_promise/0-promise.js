export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve(1);
    reject(new Error());
  });
}
