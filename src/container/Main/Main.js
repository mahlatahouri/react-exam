import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import Title from '../../components/Title/Title'
import LastUpdate from '../../components/LastUpdate/LastUpdate'
import AppInfo from '../AppInfo/AppInfo'

class Main extends React.Component {
    state = {
        lastTimeUpdate: '',
        curency: null
    }
    fetchData = () => {
        this.setState({ curency: null })
        fetch(`https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json`)
            .then(response => response.json())
            .then(response => {
                const lastupdate = response.sana.data[0].updated_at;
                const curency = response.sana.data;
                this.setState({ lastTimeUpdate: lastupdate, curency: curency })
            })
    }
    componentDidMount() {
        this.fetchData()
    }
    render() {
        return (
            <Wrapper>
                <Title updateData={this.fetchData} />
                {this.state.curency ?
                    <Wrapper>
                        <LastUpdate updateTime={this.state.lastTimeUpdate}/>
                        <AppInfo data={this.state.curency} />
                    </Wrapper>
                    : <p className="loading">
                        <i className="fas fa-circle-notch fa-spin"></i>
                    </p>}
            </Wrapper >
        )
    }
}

export default Main