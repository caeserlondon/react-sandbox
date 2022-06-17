import { useRef } from 'react'

const UseRefExample1 = () => {
	const inputRef = useRef()
	const paraRef = useRef()

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(inputRef.current.value)
		inputRef.current.value = 'Please type something'
		inputRef.current.style.backgroundColor = 'aqua'

		paraRef.current.innerText = 'Good Bye!'
		paraRef.current.style.color = 'red'
	}

	// const onChange = (e) => {
	// 	// e.preventDefault()
	// 	// inputRef.current.value = ''
	// 	inputRef.current.style.backgroundColor = 'white'
	// }

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor='name'>Name</label>
				<input
					// onChange={onChange}
					type='text'
					id='name'
					ref={inputRef}
					className='form-control mb-2'
				/>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
				<p ref={paraRef} onClick={() => inputRef.current.focus()}>
					Focus
				</p>
			</form>
		</div>
	)
}

export default UseRefExample1
