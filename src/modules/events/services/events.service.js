import CrudService from "globals/core.service";

export default class EventsService extends CrudService {
  constructor() {
    super();
    this.initialize("/events");
  }
}
