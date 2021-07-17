import React, { useState, useEffect } from 'react'
import styles from './index.module.sass'
import ModalBook from '../book'

function Card(props) {

    const [isShow, setIsShow] = useState(false)

    useEffect(() => {}, [isShow])

    function toggleScrollLock(hide) {
        if (hide)
            document.querySelector('body').style = "overflow-y: hidden; -webkit-overflow-y: hidden;"
        else
            document.querySelector('body').style = "overflow-y: auto; -webkit-overflow-y: auto;"
    }

    function showModal() {
        setIsShow(() => {return true})
        toggleScrollLock(true)
        
    }

    function closeModal() {
        setIsShow(false)
        toggleScrollLock(false) 
    }

    function renderModal() {
        console.log(1)
        return (
            <ModalBook 
                closeModal = {closeModal}
                image = {props.image}
                title = {props.title}
                category = {props.category}
                authors = {props.authors}
                language = {props.language}
                publishedDate = {props.publishedDate}
            />
        )
    }

    return (
        <>
        <div onClick={() => showModal()} className={styles.card}>

            <img src={props.image} alt={props.title} />

            <div>
                <p className={styles.category}>{props.category}</p>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.authors}>{props.authors}</p>
            </div>

        </div>

        {
            isShow ?
                renderModal()
            : null
        }
        </>
    )
}

export default Card
