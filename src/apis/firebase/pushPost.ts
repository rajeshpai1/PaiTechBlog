import { resolve } from "path";
import firebase from "./firebase";
import axios from 'axios'
const db = firebase.database();
const PERMISSION_DENIED_STATUS_CODE = 'PERMISSION_DENIED';


const pushImage = (_file:any) => { 
    return new Promise<T>(async resolve => {
        const data = new FormData();
        data.append('file', _file);
        data.append('upload_preset', 'byw6v1nx');
        const res = await axios({
            method: 'post',
            url: `${new URL("https://api.cloudinary.com/v1_1/dgzls16bt/image/upload/TechBlog")}`,
            data: data
          });;
        console.log(res);
        resolve(res);
        return res
    });

}

const  pushPost = (file: any, text: any) => { 
    return new Promise<T>(resolve => {
        var ar = text.split('\n')
        var title = ar[0]
        console.log(text)
        var context = ar.slice(1,10).join(" ").split(" ", 100).join(" ")
        var response = db.ref().child('articles1').push().set({
            file,
            title,
            context
        }
        );
        resolve(response)
    });

}

export {pushImage, pushPost};

