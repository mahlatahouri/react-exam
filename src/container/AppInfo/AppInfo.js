import React from 'react'
import CurencyList from '../../components/CurencyList/CurencyList'
import GoldList from '../../components/GoldList/GoldList'
import './AppInfo.css'

const AppInfo = (props) => {
    return (
        <section id="appInfo">
            <div>
                <h3><i className="fa fa-money-bill"></i>دلار و ارز</h3>
                <CurencyList />
            </div>
            <div>
                <h3><i className="fa fa-coins"></i>طلا و سکه</h3>
                <GoldList />
            </div>
        </section>
    )
}

export default AppInfo