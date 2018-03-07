import axios from 'axios';

const url = "http://localhost:3000/mouvs";

export default class Dao {
 
  static getAll() {
      return axios({
          method:'get',
          url: url
    })
  }
} 
 