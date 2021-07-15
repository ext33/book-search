const initialState = {
    books: {},
    sort: null,
    category: null,
    categories: [],
    error: false,
    loading: false,
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
                sort: null,
                category: null,
                categories: [],
                error: false,
                loading: false,
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
                sort: null,
                category: null,
                categories: [],
                error: false,
                loading: false,
                query: action.query,
                lastElementIndex: state.lastElementIndex += 30
            }
        case 'BOOKS-LOADING':
            return {
                books: {},
                sort: null,
                category: null,
                categories: [],
                error: false,
                loading: true,
                query: null,
                lastElementIndex: 0
            }
        case 'BOOKS-SORT':
            return {

            }
        case 'BOOKS-CATEGORY':
            return {

            }
        case 'BOOKS-ERROR':
            return {
                books: {},
                sort: null,
                category: null,
                categories: [],
                error: true,
                loading: false,
                query: null,
                lastElementIndex: 0
            }
        case 'BOOKS-CLEAR':
            return state
        default:
            return state
    }
}