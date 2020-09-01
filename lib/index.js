export async function fetchJoke() {
	const response = await fetch('https://icanhazdadjoke.com', {
		headers: {
			Accept: 'application/json',
		}
	});
	console.log(response);
	const data = await response.json();
	return data;
}