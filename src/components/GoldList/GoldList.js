import React from 'react'
import Gold from '../Gold/Gold'
import GoldImg from '../../assets/image/gold.png'
import CoinImg from '../../assets/image/coin.png'

const GoldList = (props) => {
    const Golds = {
        gold18: {
            title: 'طلای 18 عیار',
            image: GoldImg
        },
        emami: {
            title: 'سکه امامی',
            image: CoinImg
        },
        full: {
            title: 'سکه بهار آزادی',
            image: CoinImg
        },
        half: {
            title: 'نیم سکه',
            image: CoinImg
        },
        quarter: {
            title: 'ربع سکه',
            image: CoinImg
        }
    }
    return (
        <ul>
            <Gold
                title={Golds['gold18'].title}
                sell={23, 432200}
                buy={24, 864200}
                image={GoldImg}
            />
            <Gold
                title={Golds['emami'].title}
                sell={23, 432200}
                buy={24, 864200}
                image={CoinImg}
            />
            <Gold
                title={Golds['full'].title}
                sell={23, 432200}
                buy={24, 864200}
                image={CoinImg}
            />
            <Gold
                title={Golds['half'].title}
                sell={23, 432200}
                buy={24, 864200}
                image={CoinImg}
            />
            <Gold
                title={Golds['quarter'].title}
                sell={23, 432200}
                buy={24, 864200}
                image={CoinImg}
            />
        </ul>
    )
}

export default GoldList