import React from 'react'
import Curency from '../Curency/Curency'
import UsaImg from '../../assets/image/usa.png'
import Euro from '../../assets/image/euro.png'
import Switzerland from '../../assets/image/switzerland.png'
import British from '../../assets/image/united-kingdom.png'
import Canada from '../../assets/image/canada.png'

const CurencyList = (props) => {
    const Curencys = {
        usa: {
            title: 'دلار آمریکا',
            image: UsaImg
        },
        euro: {
            title: 'یورو',
            image: Euro
        },
        switzerland: {
            title: 'فرانک سوئیس',
            image: Switzerland
        },
        british: {
            title: 'پوند انگلیس',
            image: British
        },
        canada: {
            title: 'دلار کانادا',
            image: Canada
        }
    }

    return (
        <ul className="wrapper-curency">
            <Curency
                title={Curencys['usa'].title}
                sell={25, 600}
                buy={26, 350}
                image={Curencys['usa'].image}
            />
            <Curency
                title={Curencys['euro'].title}
                sell={25, 600}
                buy={26, 350}
                image={Curencys['euro'].image}
            />
            <Curency
                title={Curencys['british'].title}
                sell={25, 600}
                buy={26, 350}
                image={Curencys['british'].image}
            />
            <Curency
                title={Curencys['switzerland'].title}
                sell={25, 600}
                buy={26, 350}
                image={Curencys['switzerland'].image}
            />
            <Curency
                title={Curencys['canada'].title}
                sell={25, 600}
                buy={26, 350}
                image={Curencys['canada'].image}
            />
        </ul>
    )
}

export default CurencyList