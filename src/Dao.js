import axios from 'axios';

const url = "http://localhost:3000/mouvs";

export default class Dao {

  static getAll() {
    return axios({
      method: 'get',
      url: url
    })
  }

  static setMouv() {
    return axios({
      method: 'get',
      url: url
    })
  }

  static add(mouv) {
    return axios.post(url, mouv
    ).then(function (response) {
      console.log(response)

    }).catch(function (error) {
      console.log(error)
    })
  }

  static remove(id) {
    return axios.delete(url + "/" + id).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
  }
}
