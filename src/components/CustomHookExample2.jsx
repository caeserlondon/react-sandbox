import useLocalStorage from '../hooks/useLocalStorage'

const CustomHookExample2 = () => {
	const [task, setTask] = useLocalStorage('task', '')
	const [tasks, setTasks] = useLocalStorage('tasks', [])

	const onSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<form onSubmit={onSubmit} className='w-50'>
			<div className='mb-3'>
				<label htmlFor='' className='form-label'>
					Task
				</label>
				<input
					className='form-control'
					type='text'
					value={task}
					onChange={(e) => setTask(e.target.value)}
				/>
			</div>
			<button type='submit' className='btn btn-primary my-3'>
				Submit
			</button>
		</form>
	)
}

export default CustomHookExample2
