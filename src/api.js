import axios from 'axios'

const url = 'https://www.googleapis.com/books/v1/volumes'

export async function fetchBooks(query) {
    const response = await axios.get(`${url}?q=${query}`)
    return {'data': response.data, 'status': response.status}
}