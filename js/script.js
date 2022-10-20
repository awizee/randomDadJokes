const button = document.querySelector('button')
const jokes = document.querySelector('#jokes')


const newJokes = async () => {
	const joke = await getDadJokes()
	const Newli = document.createElement('li')
	Newli.append(joke)
	jokes.append(Newli)
    jokes.style.display = 'block'
}

const getDadJokes = async () => {
    
  try {
	  const config = { headers: {Accept: 'application/json' } }
	    const res = await axios.get('https://icanhazdadjoke.com/', config)
	    return res.data.joke
} catch (error) {
	return "NO JOKES AVAILABLE"
}
}


button.addEventListener('click', newJokes)