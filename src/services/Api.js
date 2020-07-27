

class Api {
    constructor(){
        const API_ROOT = 'https://api.gar.ovh';
    }


    requests = {
        del: url =>
          superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
        get: url =>
          superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
        put: (url, body) =>
          superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
        post: (url, body) =>
          superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
      };
}



export default{

}