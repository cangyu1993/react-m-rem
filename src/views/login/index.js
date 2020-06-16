import React, {Component} from 'react';
import {connect} from 'react-redux'
import actionCreators from '../../store/actions'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import axios from '../../axios'
import './index.scss'

class login extends Component {
    constructor(props) {
        super(props)
    }

    state = {};
    componentDidMount = () => {
        // this.getIsCheck()
    }
    getIsCheck = () => {
        axios.post('/IsCheckatMger.do').then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    };
    //路由跳转
    jumpToIndex = () => {
        this.props.history.push('/microIndex')
    }

    render() {
        return (
            <div className='widthPage'>
                <div className='positionBox' onClick={this.jumpToIndex}>
                    <div className='register'>
                        <p>REGISTER</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        token: state.token
    }),
    (dispath) => ({
        action: bindActionCreators(actionCreators, dispath)
    })
)(login)
