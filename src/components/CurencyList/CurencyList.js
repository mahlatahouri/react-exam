import React from 'react'
import Curency from '../Curency/Curency'
import UsaImg from '../../assets/image/usa.png'
import Euro from '../../assets/image/euro.png'
import Switzerland from '../../assets/image/switzerland.png'
import British from '../../assets/image/united-kingdom.png'
import Canada from '../../assets/image/canada.png'
import Emirates from '../../assets/image/emirates.png'
import Iraq from '../../assets/image/iraq.png'
import Norway from '../../assets/image/norway.png'
import Japan from '../../assets/image/japan.png'
import Turkey from '../../assets/image/turkey.png'

const CurencyList = (props) => {
    const info = {
        sana_buy_usd: {
            title: 'دلار آمریکا',
            image: UsaImg
        },
        sana_buy_eur: {
            title: 'یورو',
            image: Euro
        },
        sana_buy_chf: {
            title: 'فرانک سوئیس',
            image: Switzerland
        },
        sana_buy_gbp: {
            title: 'پوند انگلیس',
            image: British
        },
        sana_sell_cad: {
            title: 'دلار کانادا',
            image: Canada
        },
        sana_buy_aed: {
            title: 'درهم امارات',
            image: Emirates
        },
        sana_buy_try: {
            title: 'لیر ترکیه',
            image: Turkey
        },
        sana_buy_jpy: {
            title: 'ین ژاپن',
            image: Japan
        },
        sana_buy_iqd: {
            title: 'دینار عراق',
            image: Iraq
        },
        sana_sell_nok: {
            title: 'کرون نروژ',
            image: Norway
        },
        toPersianNumber: (price) => Number(price).toLocaleString('fa-ir')
    }
    // slice custom curency match on info object
    let data = props.data.filter(item => Object.keys(info).indexOf(item.slug) != -1)
    let result = data.map(item => {
        return (<Curency
            key={item.slug}
            title={info[item.slug].title}
            image={info[item.slug].image}
            sell={info.toPersianNumber(item.p)}
            buy={info.toPersianNumber(item.p)}
        />)
    })
    return (
        <ul className="wrapper-curency">{result}</ul>
    )
}
export default CurencyList