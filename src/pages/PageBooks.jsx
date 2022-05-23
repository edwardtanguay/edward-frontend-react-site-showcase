import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://edwardtanguay.netlify.app/share/techBooks.json'; 

export const PageBooks = () => {
	const [techBooks, setTechBooks] = useState([]);

	useEffect(() => {
		(async () => {
			setTechBooks((await axios.get(url)).data);
		})();
	}, []);

	return (
		<>
			<h2>Books</h2>
			<p>Here are the books:</p>
			<img src="images/bashCookbook.jpg" />

			<h3>There are {techBooks.length} books.</h3>
			<ul>
				{techBooks.map((techBook, index) => {
					return (
						<li key={index}>{techBook.title}</li>
					)
				})}
			</ul>
		</>
	);
};