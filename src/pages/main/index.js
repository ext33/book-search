import React, { useEffect } from 'react'
import styles from './index.module.sass'
import emptyBookImage from '../../assets/empty-book.png'
import Header from '../../components/header'
import Card from '../../components/card'
import { connect } from 'react-redux'
import Loading from '../../components/loading'
import { loadBooks } from '../../redux/bookStore/actions'


function MainPage(props) {

    useEffect(() => {

    }, [props])

    function renderBooks() {
        return props.books.items.map((book, index) => {
            if (book.volumeInfo){
                let authors = ''
                let categories = ''

                if (book.volumeInfo.authors)
                    book.volumeInfo.authors.forEach((author) => {
                        return authors += author
                    })

                if (book.volumeInfo.categories)
                    book.volumeInfo.categories.forEach((category) => {
                        return categories += category
                    })
                

                return (
                    <Card 
                        key={index}
                        id = {book.id}
                        image = {book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail: emptyBookImage}
                        title = {book.volumeInfo.title}
                        category = {categories}
                        authors = {authors}
                    />
                )
            } else {
                return null
            }
        })
    }

       

    function renderBooksBlock() {
        return (
            <>
                <div className={styles.count}>
                    Found { props.books.totalItems } books
                </div>
                <div className={styles.container}>
                    { renderBooks() }
                </div>
                <button onClick={() =>  props.loadMoreBooks(props.query, props.lastElementIndex)}>Load more</button>
            </>
        )
    }

    return (
        <div className={styles.main}>

            <Header />

            {
                props.books.items ? renderBooksBlock() 
                : props.isLoading ? <Loading />
                : props.error ? <div>error</div>
                : <div className={styles.notification}>
                    No books found...
                  </div>
            }

        </div>
    )
}

function mapStateToProps(state) {
    console.log(state.booksReducer)
    return {
        books: state.booksReducer.books,
        error: state.booksReducer.error,
        isLoading: state.booksReducer.loading,
        query: state.booksReducer.query,
        lastElementIndex : state.booksReducer.lastElementIndex
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadMoreBooks: (query, startIndex) => dispatch(loadBooks(query, startIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
