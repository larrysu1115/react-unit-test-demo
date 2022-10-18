import axios from "axios";

function getJoke() {
  return axios
    .get("https://official-joke-api.appspot.com/random_joke")
    .then(function (response) {
      if (response.status === 200) {
        return response.data;
      }
      else
      {
        return { error: `status:${response.status} is not 200 (Http OK)` }
      }
    })
    .catch(function (error) {
      console.error(error);
      return {};
    });
}

export { getJoke };
