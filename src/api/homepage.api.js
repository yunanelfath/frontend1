import axios from "axios";

export const homepageApi = {
  root: "/api/v2/app/list",
};

export function apiGetHomepage(params){
  let url = homepageApi.root
  const {
    page
  } = params

  return new Promise((resolve, reject)=>{

        axios
        .get(url, {
          params: {
            page: page
          }
        })
        .then(response => {
          resolve({ response: response.data })
        })
        .catch(err => {
          reject(err.response)
        });

  })

}
