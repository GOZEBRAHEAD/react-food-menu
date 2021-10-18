import './App.css';
import Card from './components/card/Card';
import { useState } from "react";

function App() {

	const PRODUCTS = [

		{ id: 1, name: "Sushi", price: 17.99, category: "All", img: "product1.jpg", 
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iusto?"},

		{ id: 2, name: "Spaghetti", price: 14.99, category: "All", img: "product2.jpg", 
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iusto?"},
		
		{ id: 3, name: "Waffles", price: 11.99, category: "Breakfast", img: "product3.jpg", 
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iusto?" },
		
		{ id: 4, name: "Sweet pancakes", price: 14.99, category: "Breakfast", img: "product4.jpg", 
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iusto?" },
		
		{ id: 5, name: "Cheeseburger", price: 30.00, category: "Lunch", img: "product5.jpg",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iusto?" },

		{ id: 6, name: "Pizza", price: 27.00, category: "Lunch", img: "product6.jpg",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iusto?" },
		
		{ id: 7, name: "Coffee", price: 12.99, category: "Drinks", img: "product7.jpg", 
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iusto?" },

		{ id: 8, name: "Smoothie", price: 9.99, category: "Drinks", img: "product8.jpg", 
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iusto?" }
	];

	const [foodFilter, setFoodFilter] = useState("All");

	const verifyFilterUpdate = (value) => (foodFilter === value) ? null : setFoodFilter(value);

	return (
		<div className="layout">

			<header className="layout__header">
				<h1>Welcome to our menu</h1>

				<div className="layout__header__socials">
					<a href="https://github.com/GOZEBRAHEAD" aria-label="GitHub" target="_blank" rel="noreferrer">
						<i className="fab fa-github"></i>
					</a>
					<a href="https://www.linkedin.com/in/luciano-nieves/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
						<i className="fab fa-linkedin"></i>
					</a>
					<a href="https://www.instagram.com/lucho_nieves/" aria-label="Instagram" target="_blank" rel="noreferrer">
						<i className="fab fa-instagram"></i>
					</a>

				</div>
			</header>

			<div className="layout__filters">
				<button onClick={() => verifyFilterUpdate("All")}>All</button>
				<button onClick={() => verifyFilterUpdate("Breakfast")}>Breakfast</button>
				<button onClick={() => verifyFilterUpdate("Lunch")}>Lunch</button>
				<button onClick={() => verifyFilterUpdate("Drinks")}>Drinks</button>
			</div>

			<main className="layout__content">
				{
					PRODUCTS
						.filter(item => foodFilter === "All" || item.category === foodFilter)
						.map(item => <Card key={ item.id } objData={ item } />)
				}
			</main>

		</div>
	);
}

export default App;