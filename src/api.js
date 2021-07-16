import axios from 'axios'

const url = 'https://www.googleapis.com/books/v1/volumes'

export async function fetchBooks(query, sort, category) {
    let response 
    if (category === 'all')
        response = await axios.get(`${url}?q=${query}&maxResults=30&orderBy=${sort}`)
        .catch(() => {
            return {'data': null, 'status': 400}
        })
    else 
        response = await axios.get(`${url}?q=${query}+subject:${category}&maxResults=30&orderBy=${sort}`)
        .catch(() => {
            return {'data': null, 'status': 400}
        })
    
    return {'data': response.data, 'status': response.status}
}

export async function fetchMoreBooks(query, sort, category, startIndex) {
    let response 
    if (category === 'all')
        response = await axios.get(`${url}?q=${query}&maxResults=30&startIndex=${startIndex}&orderBy=${sort}`)
        .catch(() => {
            return {'data': null, 'status': 400}
        })
    else
        response = await axios.get(`${url}?q=${query}+subject:${category}&maxResults=30&startIndex=${startIndex}&orderBy=${sort}`)
        .catch(() => {
            return {'data': null, 'status': 400}
        })

    return {'data': response.data, 'status': response.status}
}