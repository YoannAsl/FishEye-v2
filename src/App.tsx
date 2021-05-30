import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/photographers/:id' />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
