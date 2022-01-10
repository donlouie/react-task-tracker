import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Task 1',
			day: 'Monday',
			reminder: true,
		},
		{
			id: 2,
			text: 'Task 2',
			day: 'Tuesday',
			reminder: true,
		},
		{
			id: 3,
			text: 'Task 3',
			day: 'Wednesday',
			reminder: false,
		},
	]);

	return (
		<div className="container">
			<Header />
			<Tasks tasks={tasks} />
		</div>
	);
}

export default App;
