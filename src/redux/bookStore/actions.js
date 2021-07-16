import { fetchBooks, fetchMoreBooks } from '../../api'


export function startFetchingBooks() {

    // Function for enabling loading while books are fetching.
    
    return async (dispatch) => {
        dispatch({type: 'BOOKS-LOADING'})
    }
}

export function startFetchingMoreBooks() {

    // Function for enabling loading while books are fetching.
    
    return async (dispatch) => {
        dispatch({type: 'BOOKS-LOADING-MORE'})
    }
}

export function getBooks(query, sort, category) {

    // Function for fetching books and handling errors.
    // ------------------------------------------------------
    // query: query for searching books by name/category etc.
    // ------------------------------------------------------

    return async (dispatch) => {
        let result = await fetchBooks(query, sort, category)

        if (result.status === 200){
            dispatch({type: 'BOOKS-FETCH', books: result.data, query: query, sort: sort, category: category})
        } else {
            dispatch({type: 'BOOKS-ERROR'})
        }
    }
}

export function loadBooks(query, sort, category, startIndex) {

    // Function for fetching more books and paginate them.
    // ------------------------------------------------------
    // query: query for searching books by name/category etc.
    // startIndex: last index of book, loaded on the last time
    // ------------------------------------------------------
    return async (dispatch) => {
        let result = await fetchMoreBooks(query, sort, category, startIndex)

        if (result.status === 200){
            dispatch({type: 'BOOKS-LOAD-MORE', books: result.data, query: query, sort: sort, category: category})
        } else {
            dispatch({type: 'BOOKS-ERROR'})
        }
    }
}