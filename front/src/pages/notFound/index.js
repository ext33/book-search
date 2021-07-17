import React from 'react'
import styles from './index.module.sass'

function pageNotFound() {
    return (
        <div className={`${styles.page} animate__fadein`}>
            <p>Page not found...</p>
            <a href='/'>Back to main page</a>
        </div>
    )
}

export default pageNotFound
