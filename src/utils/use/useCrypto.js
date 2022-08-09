import CryptoJS from 'crypto-js';
import JSEncrypt from 'jsencrypt';

const RSA_PUBLIC_KEY = '';
const RSA_PRIVATE_KEY = '';
const AES_KEY = '';


/// 返回aes 返回加密,解密方法
const useCryptoAES = (key = AES_KEY, iv = AES_KEY) => {  

  //AES-CBC加密方法
  const encryptAES = (text, k = key, i = iv) => {
    const encrypted = CryptoJS.AES.encrypt(
      text, 
      CryptoJS.enc.Utf8.parse(k), 
      {
        iv: CryptoJS.enc.Utf8.parse(i),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }
    );
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  };

  //aes 解密
  const decryptAES = (base64, k = key, i = iv) => {
    const encrypted = CryptoJS.AES.decrypt(
      base64, 
      CryptoJS.enc.Utf8.parse(k), 
      {
        iv: CryptoJS.enc.Utf8.parse(i),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }
    );
    return encrypted.toString(CryptoJS.enc.Utf8);
  };

  return {encryptAES, decryptAES,};
};


// 返回 RSA 加密,解密方法
const useCryptoRSA = (publicKey = RSA_PUBLIC_KEY, privateKey = RSA_PRIVATE_KEY) => {  

  // RSA encrypt
  const encryptRSA = (text, pubKey = publicKey,) => {
    const encryptor = new JSEncrypt(); // 创建加密对象实例
    //之前ssl生成的公钥，复制的时候要小心不要有空格
    encryptor.setPublicKey(pubKey);//设置公钥
    const result = encryptor.encrypt(text); // 对内容进行加密
    return result;
  };

  // RSA decrypt
  const decryptRSA = (encryptedText, priKey = privateKey,) => {
    const decryptor = new JSEncrypt();//创建解密对象实例
    //之前ssl生成的秘钥
    decryptor.setPrivateKey(priKey);//设置秘钥
    const result = decryptor.decrypt(encryptedText);//解密之前拿公钥加密的内容
    return result;
  };

  return {encryptRSA, decryptRSA,};
};

export{
  useCryptoAES,
  useCryptoRSA
};


//  exa:
// import { useCryptoAES, useCryptoRSA } from '@/utils/useCrypto';
// import tools from '@/utils/tools';

// const { RSA_PUBLIC_KEY, AES_KEY } = tools.CryptoParams;

// const {encryptAES, decryptAES} = useCryptoAES(); 
// const {encryptRSA, } = useCryptoRSA(); 

// const x = encryptAES(passWord);
// console.log('encrypt', x);
// console.log('decrypt', decryptAES(x));
// console.log('sesame', encryptRSA(AES_KEY));