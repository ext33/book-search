import React from 'react'
import styles from './index.module.sass'
import Header from '../../components/header'
import Card from '../../components/card'

function MainPage() {
    return (
        <div className={styles.main}>

            <Header />
            <div className={styles.count}>
                467 results
            </div>
            <div className={styles.container}>
                <Card 
                    id = "sd321"
                    image = "http://books.google.com/books/content?id=005SAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    title = "The Flower Vase"
                    category = "American poetry"
                    authors = "Sarah Carter Edgarton Mayo"
                />
                <Card 
                    id = "sd322"
                    image = "http://books.google.com/books/content?id=005SAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    title = "The Flower Vase"
                    category = "American poetry"
                    authors = "Sarah Carter Edgarton Mayo"
                />
                <Card 
                    id = "sd323"
                    image = "http://books.google.com/books/content?id=005SAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    title = "The Flower Vase"
                    category = "American poetry"
                    authors = "Sarah Carter Edgarton Mayo"
                />
            </div>

        </div>
    )
}

export default MainPage
