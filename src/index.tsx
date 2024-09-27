import { render } from 'preact';

import './style.css';

export function App() {
	return <>
		<div class="titlebox">
			Hello World!
		</div>
		<Selector></Selector>
	</>
	
}

function Selector() {
	return (
		<div>
			<form>
				<select>Hello</select>
			</form>
		</div>
	)
}

render(<App />, document.getElementById('app'));
