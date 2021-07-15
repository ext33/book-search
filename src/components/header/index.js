import React, { useEffect, useState } from 'react'
import styles from './index.module.sass'
import { startFetchingBooks, getBooks } from '../../redux/bookStore/actions'
import { connect } from 'react-redux'


function Header(props) {

    useEffect(() => {}, [props])

    const [searchData, setSearchData] = useState({
        query: null,
        sort: null,
        category: null,
    })

    function updateSearchData(e) {

        document.getElementById('search').style = 'border: none'
        setSearchData({
            ...searchData,
            [e.target.name]: e.target.value,
        })

    }

    function startSearch() {

        if(searchData.query) {
            props.startLoading()
            props.search(searchData.query)
        } else {
            document.getElementById('search').style = 'border: 1px solid red'
        }

    }

    return (
        <div className={styles.header}>
            
            <div className={styles.search}>

                <input name="query" type="search" id="search" placeholder="" onChange={updateSearchData} />
                <button onClick={() => startSearch()}>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                        xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 512.005 512.005" 
                        xml="preserve">
                        <g>
                            <g>
                                <path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
                                    S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
                                    c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
                                    M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/>
                            </g>
                        </g>
                    </svg>
                </button>

            </div>

            <div className={styles.categories}>
                
                <div>
                    <select id="category" name="category">
                        <option>all</option>
                    </select>
                </div>

                <div>
                    <select id="sort" name="sort">
                        <option>relevance</option>
                    </select>
                </div>

            </div>

        </div>
    )
}

function mapStateToProps(state){
    return {
        sort: state.booksReducer.sort,
        category: state.booksReducer.category,
        categories: state.booksReducer.categories,
    }
}

function mapDispatchToProps(dispatch){
    return {
        startLoading: () => dispatch(startFetchingBooks()),
        search: (query) => dispatch(getBooks(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
