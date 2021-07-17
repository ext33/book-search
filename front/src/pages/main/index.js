import React, { useEffect } from 'react'
import styles from './index.module.sass'
import { Redirect } from 'react-router-dom'
import emptyBookImage from '../../assets/empty-book.png'
import Header from '../../components/header'
import Card from '../../components/card'
import { connect } from 'react-redux'
import Loading from '../../components/loading'
import { loadBooks, startFetchingMoreBooks } from '../../redux/bookStore/actions'


function MainPage(props) {

    useEffect(() => {

    }, [props])

    function loadMoreBooks(){
        // ----------------------
        // function for start loading more books
        // ----------------------
        
        props.startLoadMoreBooks()
        props.loadMoreBooks(props.query, props.sort, props.category, props.lastElementIndex)
    }

    function renderBooks() {
        // ----------------------
        // render book cards in conatiner
        // ----------------------

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
                        image = {book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : emptyBookImage}
                        title = {book.volumeInfo.title}
                        category = {categories}
                        authors = {authors}
                        language = {book.volumeInfo.language ? book.volumeInfo.language : null}
                        publishedDate = {book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : null}
                    />
                )
            } else {

                return null
            }
        }) 
    }

    function renderBooksBlock() {
        // ----------------------
        // function for render cards container
        // ----------------------

        return (
            <div className={`${styles.mainContainer} animate__fadein`}>
                
                <div className={styles.count}>
                    Found { props.books.totalItems } books
                </div>

                <div className={styles.booksContainer}>
                    { renderBooks() }
                </div>

                <button className={styles.loadButton} onClick={() => {loadMoreBooks()}}>
                    { props.isLoadingMore ? <>. . .</> : <>Load more</>}
                </button>

            </div>
        )
    }

    return (
        <div className={`${styles.main} animate__fadein`}>

            <Header />

            {
                props.isLoading ? <Loading /> : 
                props.error ? <Redirect to='/error' /> : 
                props.books.items ? renderBooksBlock() : 
                <div className={`${styles.notification} animate__fadein`}>
                    No books found...
                </div>
            }

        </div>
    )
}

function mapStateToProps(state) {
    return {
        books: state.booksReducer.books,
        error: state.booksReducer.error,
        isLoading: state.booksReducer.loading,
        isLoadingMore: state.booksReducer.loadingMore,
        query: state.booksReducer.query,
        sort: state.booksReducer.sort,
        category: state.booksReducer.category,
        lastElementIndex : state.booksReducer.lastElementIndex
    }
}

function mapDispatchToProps(dispatch) {
    return {
        startLoadMoreBooks: () => dispatch(startFetchingMoreBooks()),
        loadMoreBooks: (query, sort, category, startIndex) => dispatch(loadBooks(query, sort, category, startIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
