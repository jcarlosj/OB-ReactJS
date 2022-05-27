import { LEVELS } from './levels.enum';


export class Task {
	id = '';
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor( name, description, completed, level ) {
		this.id = new Date().getTime() * Math.random() * 100000;
		this.name = name;
		this.description = description;
		this.completed = completed;
		this.level = level;
    }
}
