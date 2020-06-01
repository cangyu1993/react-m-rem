import React, {Component} from 'react';
import {connect} from 'react-redux'
import actionCreators from '../../store/actions'
import {bindActionCreators} from 'redux'

class login extends Component {
    constructor(props) {
        super(props)
    }

    state = {};
    showNumAdd = () => {
        let num = this.props.showNum
        this.props.action.changeShowNum(++num)
    };
    showNumReduce = () => {
        let num = this.props.showNum
        this.props.action.changeShowNum(--num)
    }

    render() {
        return (
            <div>
                loginPages + {this.props.showNum}
                <button onClick={this.showNumAdd}>增加</button>
                <button onClick={this.showNumReduce}>减少</button>
            </div>
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
