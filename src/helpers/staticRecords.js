import TaskRecords from '../data/task.records.json';
import { Task } from '../models/task.class';

export const getStaticTaskRecords = () => {
    const tasks = TaskRecords.map( record => {
		return new Task( record.name, record.description, record.complete, record.level )
	});

	return tasks;
}
