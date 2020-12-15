import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import Title from '../../components/Title/Title'
import LastUpdate from '../../components/LastUpdate/LastUpdate'
import AppInfo from '../AppInfo/AppInfo'

class Main extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title />
                <LastUpdate />
                <AppInfo />
            </Wrapper>
        )
    }
}

export default Main