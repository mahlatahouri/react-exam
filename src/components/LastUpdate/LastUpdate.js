import React from 'react'
import './LastUpdate.css'

const LastUpdate = (props) => {
    const date = new Date(props.updateTime);
    const fullDate = date.toLocaleString('fa-ir', { weekday: 'long' })
        + ' ' + date.toLocaleString('fa-ir', { day: 'numeric' })
        + ' ' + date.toLocaleString('fa-ir', { month: 'long' })
        + ' ' + date.toLocaleString('fa-ir', { year: '2-digit' })
    const fullTime = props.updateTime.split(' ')[1];
    return (
        <section className="lastupdate">
            <p>آخرین به روزرسانی</p>
            <p>
                <span>{fullDate}</span>
                <span>--</span>
                <span>{fullTime}</span>
            </p>
        </section>
    )
}

export default LastUpdate