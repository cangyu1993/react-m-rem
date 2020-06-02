import React, {Component} from 'react';
import {connect} from 'react-redux'
import actionCreators from '../../store/actions'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import './index.scss'

class login extends Component {
    constructor(props) {
        super(props)
    }

    state = {};

    render() {
        return (
            <Link to='/microIndex' className='widthPage'></Link>
        )
    }
}

export default connect(
    (state) => ({
        showNum: state.showNum
    }),
    (dispath) => ({
        action: bindActionCreators(actionCreators, dispath)
    })
)(login)
