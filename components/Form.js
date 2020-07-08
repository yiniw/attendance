export default function Form() {
	return <form type='post' className='form' >
		<h3>Check in for today!</h3>
		<div className='formField'>
			<label>I've learnt </label>
			<input className='content' type='text' name='content' />
		</div>
		<div className='formField'>
			<label>for </label>
			<input className='hours' type='number' name='hours' /> hours today
		</div>
		<div className='formField'>
			<button type='submit'>Get one step closer to the final award!</button>
		</div>
	</form>;
}
