import axios from 'axios'

const URL = 'https://api.quotable.io/random'

const options = {
    params: {},
    headers: {}
};

const fetchRandomQuote = async () => {
    try {
        const data = await axios.get(URL, options)

        return {
            author: data.data.author,
            content: data.data.content
        }
    } catch (err) {
        return null
    }
}

export default fetchRandomQuote