const initialState = {
    books: {},
    sort: 'relevance',
    category: 'all',
    error: false,
    loading: false,
    loadingMore: false,
    query: null,
    lastElementIndex: 0
}

export default function booksReducer(state = initialState, action){
    
   // Reducer for books data
   // ----------------------
   // -FETCH: add to store fetched data
   // -LOADING: start loading while loading books data
   // -ERROR: set error
   // -CLEAR: clear books store
   // ----------------------
   
    switch (action.type) {
        case 'BOOKS-FETCH':
            return {
                books: action.books,
                sort: action.sort,
                category: action.category,
                error: false,
                loading: false,
                loadingMore: false,
                query: action.query,
                lastElementIndex: 30,
            }
        case 'BOOKS-LOAD-MORE':
            return {
                books: {
                    ...state.books,
                    items: [
                        ...state.books.items.concat(action.books.items)
                    ]
                },
                sort: action.sort,
                category: action.category,
                error: false,
                loading: false,
                loadingMore: false,
                query: action.query,
                lastElementIndex: state.lastElementIndex += 30
            }
        case 'BOOKS-LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'BOOKS-LOADING-MORE':
            return {
                ...state,
                loadingMore: true,
            }
        case 'BOOKS-ERROR':
            return {
                books: {},
                sort: null,
                category: null,
                error: true,
                loading: false,
                loadingMore: false,
                query: null,
                lastElementIndex: 0
            }
        case 'BOOKS-CLEAR':
            return initialState
        default:
            return state
    }
}