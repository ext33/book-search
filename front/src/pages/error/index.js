import React from 'react'
import styles from './index.module.sass'

function ErrorPage() {
    return (
        <div className={`${styles.page} animate__fadein`}>
            <p>Something went wrong...</p>
            <a href='/'>Back to main page</a>
        </div>
    )
}

export default ErrorPage
