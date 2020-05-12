import CrudService from "globals/core.service";

export default class CategoryService extends CrudService {
  constructor() {
    super();
    this.initialize("/categories");
  }
}
