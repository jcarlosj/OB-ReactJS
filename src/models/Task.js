import { LEVELS } from './levels.enum';


export default class Task {
	  id = '';
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor( id, name, description, completed, level ) {
      console.log( id, name, description, completed, level );
      this.id = id;
      this.name = name;
      this.description = description;
      this.completed = completed;
      this.level = level;
    }
}