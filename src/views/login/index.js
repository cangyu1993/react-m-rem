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
        this.getIsCheck()
    }
    getIsCheck = () => {
        axios.post('/IsCheckatMger.do').then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <Link to='/microIndex' className='widthPage'></Link>
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
