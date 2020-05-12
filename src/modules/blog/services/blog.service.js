import CrudService from "globals/core.service";

export default class BlogService extends CrudService {
  constructor() {
    super();
    this.initialize("/blog");

    this.filter = this.filter.bind(this);
    this.search = this.search.bind(this);
  }

  async filter(categoryId) {
    let { data: records } = await this._http.get(
      `${this.url}/filter/${categoryId}`
    );

    return records;
  }

  async search(query) {
    let { data: records } = await this._http.get(
      `${this.url}/search?q=${query}`
    );

    return records;
  }
}
