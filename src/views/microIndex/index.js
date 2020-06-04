import React, {Component} from 'react';
import axiosUpload from 'axios'
import store from '../../store'
import SparkMD5 from 'spark-md5'

class microIndex extends Component {
    constructor(props) {
        super(props)
    }

    //上传文件
    upLoadFiles = (chunk = {}) => {
        return new Promise((resolve, reject) => {
            let {token} = store.getState()
            axiosUpload.post('/WtBusinessCardEdit.do', chunk, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    token
                }
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }

    // 生成文件切片(length为切片数量,hash)
    createFileChunk = (file, length = 10) => {
        const fileChunkList = [];
        const chunkSize = Math.ceil(file.size / length);
        let cur = 0;
        while (cur < file.size) {
            let spark = new SparkMD5.ArrayBuffer()
            let ChunkFile = file.slice(cur, cur + chunkSize)
            spark.append(ChunkFile)
            fileChunkList.push({
                file: ChunkFile,
                hash: spark.end()
            });
            cur += chunkSize;
        }
        return fileChunkList;
    }

    //获取文件
    getFiles = e => {
        let fileChunkList = this.createFileChunk(e.target.files[0])
        fileChunkList.map(({file, hash}) => {
            let formData = new FormData()
            formData.append('file', file)
            formData.append('hash', hash)
            console.log(formData)
            return formData
        })
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
