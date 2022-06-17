import { useRef, useState, useEffect } from 'react'

const UseRefExample2 = () => {
	const [name, setName] = useState('')

	const renders = useRef(1)
	const prevName = useRef('')

	useEffect(() => {
		renders.current = renders.current + 1
		prevName.current = name
	}, [name])

	return (
		<div>
			<h5>Renders: {renders.current} times</h5>
			<h6>Current Name State: {name}</h6>
			<h6>Previous Name State: {prevName.current}</h6>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
				className='form-control mb-3'
			/>
		</div>
	)
}

export default UseRefExample2
