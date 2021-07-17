import React from 'react'
import styles from './index.module.sass'

function Loading() {
    return (
        <div className={`${styles.loading} animate__fadein`}>
            <p>Loading</p><span> .</span><span> .</span><span> .</span>
        </div>
    )
}

export default Loading
