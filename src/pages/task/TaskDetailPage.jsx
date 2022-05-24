import { useParams } from 'react-router-dom';


const TaskDetailPage = () => {

	const { id } = useParams();

	return (
		<div>
			<h1>Task Detail Page - { id }</h1>
		</div>
	);
};


TaskDetailPage.propTypes = {

};


export default TaskDetailPage;
