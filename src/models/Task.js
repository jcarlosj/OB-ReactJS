import { LEVELS } from './levels.enum';


export class Task {
	id = '';
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor( name, description, completed, level ) {
		this.id = new Date().valueOf();
		this.name = name;
		this.description = description;
		this.completed = completed;
		this.level = level;
    }
}