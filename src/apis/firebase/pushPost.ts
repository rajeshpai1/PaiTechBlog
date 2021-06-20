import { resolve } from "path";
import firebase from "./firebase";
import axios from 'axios'
const db = firebase.database();
const PERMISSION_DENIED_STATUS_CODE = 'PERMISSION_DENIED';


const pushPost = (_file:any) => { 
    return new Promise<T>(async resolve => {
        const data = new FormData();
        data.append('file', _file);
        data.append('upload_preset', 'byw6v1nx');
        const res = await axios({
            method: 'post',
            url: `${new URL("https://api.cloudinary.com/v1_1/dgzls16bt/image/upload")}`,
            data: data
          });;
        console.log(res);
        resolve(res);
        return res
    });

}

export {pushPost};

