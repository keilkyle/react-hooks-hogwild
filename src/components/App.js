import React, {useState} from "react";
import Nav from "./Nav";
import Hog from "./Hog";
import Filter from "./Filter"
import Sort from "./Sort"

import hogs from "../porkers_data";
console.log(hogs)

function App() {
	
	const [greasy, changeOil] = useState(false)

	const [sortHogs, hogChanger] = useState(hogs)

	function filterHandler() {
		const greasyTwo = !greasy;
		changeOil(greasyTwo);
	}

	let oilStatus = greasy ? "Show me everyone." : "Show me the oily boyz"
	
	function nameSort () {
		const newHogs = sortHogs.sort((a,b) => a.name > b.name ? 1 : -1)
		console.log(newHogs)
		hogChanger(newHogs)
	}

	function weightSort () {
		const newHogs = sortHogs.sort((a,b) => a.weight > b.weight ? -1 : 1)
		console.log(newHogs)
		hogChanger(newHogs)
	}

	return (
		<div className="App">
			<Nav/>
			<Filter greaseHandler={filterHandler} greasyWords={oilStatus}/>
			<Sort nameSortHandler={nameSort} weightSortHandler={weightSort} />
			{sortHogs.map((hog) => {
				return <Hog key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medal={hog["highest medal achieved"]}/>
			}).filter((piggy) => {
				if(greasy) {return piggy.props.greased} else {return true}
			})
			}
		</div>
	);
}

export default App;
