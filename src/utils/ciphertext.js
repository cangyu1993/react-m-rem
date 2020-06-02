import CryptoJS from 'crypto-js'

const ciphertext = {
    //加密方法aes
    Encrypt(word, key) {
        let encryptData = CryptoJS.AES.encrypt(JSON.stringify(word), key).toString()
        return encryptData
    },
    //解密方法aes
    Decrypt(word, key) {
        let bytes = CryptoJS.AES.decrypt(word, key)
        let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
        return decryptedData
    },
    //MD5加密(不可逆)
    MD5(word) {
        return CryptoJS.MD5(word).toString().toUpperCase()
    }
}

export default ciphertext
