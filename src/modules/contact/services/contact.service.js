import CrudService from "globals/core.service";

export default class MessageService extends CrudService {
  constructor() {
    super();
    this.initialize("/messages");
  }
}
