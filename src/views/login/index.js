import React, {Component} from 'react';
import {connect} from 'react-redux'
import actionCreators from '../../store/actions'
import {bindActionCreators} from 'redux'
import {Flex, Button} from 'antd-mobile'
import './index.scss'

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
            <div className='widthPage'>
                <p className='showNumber'>{this.props.showNum}</p>
                <Flex>
                    <Flex.Item>
                        <Button type="primary" onClick={this.showNumAdd}>+1</Button>
                    </Flex.Item>
                    <Flex.Item>
                        <Button type="warning" onClick={this.showNumReduce}>-1</Button>
                    </Flex.Item>
                </Flex>
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
