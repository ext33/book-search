import axios from 'axios'

const url = 'https://www.googleapis.com/books/v1/volumes'

export async function fetchBooks(query) {
    const response = await axios.get(`${url}?q=${query}&maxResults=30`)
    .catch(() => {
        return {'data': null, 'status': 400}
    })

    return {'data': response.data, 'status': response.status}
}

export async function fetchMoreBooks(query, startIndex) {
    const response = await axios.get(`${url}?q=${query}&maxResults=30&startIndex=${startIndex}`)
    .catch(() => {
        return {'data': null, 'status': 400}
    })

    return {'data': response.data, 'status': response.status}
}