import CrudService from "globals/core.service";

export default class NewsLetterService extends CrudService {
  constructor() {
    super();
    this.initialize("/subscribers");
  }
}
