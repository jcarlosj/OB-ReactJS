import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const TaskDetailPage = ({ data }) => {

	const { tasks } = data;

	const { id } = useParams();

	const [ task, setTask ] = useState({});

	useEffect(() => {

		if( tasks.length > 0 ) {
			setTask( tasks.find( task => task.id == id ) );
		}

	}, [ tasks ]);

	return (
		<div className="container mt-5">
			<h1>Task Detail Page - { id }</h1>
			<p><b>Name: </b>{ task.name }</p>
			<p><b>Description: </b>{ task.description }</p>
		</div>
	);
};


TaskDetailPage.propTypes = {

};


export default TaskDetailPage;
