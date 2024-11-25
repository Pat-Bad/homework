import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import ImageComponent from "./Components/ImageComponent";

function App() {
	return (
		<div className="App">
			<main>
				<section>
					<ButtonComponent instruction="Clicca questo bottone" />
					<ButtonComponent instruction="Clicca anche questo bottone!" />
					<ButtonComponent instruction="Ultimo bottone..." />
				</section>
				<section>
					<ImageComponent
						src="https://www.placedog.net/500/500"
						alt="doggo"
					/>
					<ImageComponent
						src="https://www.placedog.net/300/300"
						alt="doggo2"
					/>
				</section>
			</main>
		</div>
	);
}

export default App;
