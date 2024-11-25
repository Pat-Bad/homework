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
						source="https://www.placedog.net/500/500"
						altText="doggo"
					/>
					<ImageComponent
						source="https://www.placedog.net/300/300"
						altText="doggo2"
					/>
				</section>
			</main>
		</div>
	);
}

export default App;
