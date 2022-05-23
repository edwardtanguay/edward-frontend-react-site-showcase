import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageBooks } from './pages/PageBooks';

function App() {
	return (
		<div className="App">
			<h1>React Site</h1>


      <PageWelcome/>
      <PageBooks/>
		</div>
	);
}

export default App;
