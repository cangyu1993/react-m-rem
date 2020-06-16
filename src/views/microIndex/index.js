import React, {Component} from 'react';
// import axiosUpload from 'axios'
// import store from '../../store'
// import SparkMD5 from 'spark-md5'
import EXIF from 'exif-js'

class microIndex extends Component {
    constructor(props) {
        super(props)
    }

    //获取文件
    getFiles = e => {
        let file = e.target.files[0]
        EXIF.getData(file, function () {
            let data = EXIF.getAllTags(this)
            console.log(data)
        });
    }

    state = {
        title: 'microIndexPage'
    };

    render() {
        return (
            <div>
                <input type="file" onChange={this.getFiles}/>
            </div>
        )
    }
}

export default microIndex
