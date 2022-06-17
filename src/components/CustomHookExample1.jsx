import useFetch from '../hooks/useFetch'

const CustomHookExample1 = () => {
	// const res = useFetch('https://jsonplaceholder.typicode.com/posts', {})    OR use
	// console.log(res)
	const { data, loading } = useFetch(
		'https://jsonplaceholder.typicode.com/posts',
		{}
	)

	if (loading) {
		return <h3>Loading...</h3>
	}
	return (
		<div>
			{data.map((post) => (
				<h6 key={post.id}>{post.title}</h6>
			))}
		</div>
	)
}

export default CustomHookExample1
