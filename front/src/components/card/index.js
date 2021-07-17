import React, { useState, useEffect } from 'react'
import styles from './index.module.sass'
import ModalBook from '../modal'

function Card(props) {

    const [isShow, setIsShow] = useState(false)

    useEffect(() => {}, [isShow])

    function toggleScrollLock(hide) {
        // ----------------------
        // function for disable scroll while modal is open
        // ----------------------

        if (hide)
            document.querySelector('body').style = "overflow-y: hidden; -webkit-overflow-y: hidden;"
        else
            document.querySelector('body').style = "overflow-y: auto; -webkit-overflow-y: auto;"
    }

    function showModal() {
        // ----------------------
        // function for showing modal
        // ----------------------

        setIsShow(() => {return true})
        toggleScrollLock(true)
    }

    function closeModal() {
        // ----------------------
        // function for closing modal
        // ----------------------
        
        setIsShow(false)
        toggleScrollLock(false) 
    }

    function renderModal() {
        // ----------------------
        // function for render modal in DOM
        // ----------------------

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
