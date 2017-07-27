/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests an URL, return a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options, parse = true, getText = false) {
  return fetch(url, options)
    .then(checkStatus)
    .then((data) => {
      if (parse) {
        return data.json();
      } else if (getText) {
        return data.text();
      }
      return data;
    })
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}
