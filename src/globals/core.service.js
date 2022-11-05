import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default class CrudService {
  constructor() {
    this._http = instance;

    this.initialize = this.initialize.bind(this);
    this.list = this.list.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  initialize(url) {
    this.url = url;
  }

  async list() {
    let reqUrl = `${this.url}/list`;

    let { data: records } = await this._http.get(reqUrl);
    return records;
  }

  async getById(id) {
    let reqUrl = `${this.url}/${id}`;

    let { data: record } = await this._http.get(reqUrl);
    return record;
  }

  async create(item) {
    let reqUrl = `${this.url}/new`;

    let { data: record } = await this._http.post(reqUrl, item);
    return record;
  }

  async update(id, item) {
    let reqUrl = `${this.url}/${id}`;

    let { data: record } = await this._http.put(reqUrl, item);
    return record;
  }

  async delete(id) {
    let reqUrl = `${this.url}/${id}`;

    let { data } = await this._http.delete(reqUrl);
    return data;
  }
}
