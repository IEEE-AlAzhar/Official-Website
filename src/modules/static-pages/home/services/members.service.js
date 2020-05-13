import CrudService from "globals/core.service";

export default class BestMembersService extends CrudService {
  constructor() {
    super();
    this.initialize("/best-members");
  }
}
