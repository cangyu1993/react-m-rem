import React, {Component} from 'react';


class microIndex extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        title: 'microIndexPage'
    };

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}

export default microIndex
