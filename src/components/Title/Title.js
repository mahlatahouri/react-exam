import React from 'react'
import './Title.css'

const Title = (props) => {
    return (
        <section className="wrapper-title">
            <div>
                <span className="anim-span"></span>
                <h2>قیمت زنده دلار و ارز</h2>
            </div>
            <button title={"Update"} className="refresh-btn">⟳</button>
        </section >

    )
}

export default Title