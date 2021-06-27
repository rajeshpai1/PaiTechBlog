import { resolve } from "path";
import firebase from "./firebase";
import axios from 'axios'
const db = firebase.database();
const PERMISSION_DENIED_STATUS_CODE = 'PERMISSION_DENIED';


const pushImage = (_file:any) => { 
    return new Promise<T>(async resolve => {
        // const data = new FormData();
        // data.append('file', _file);
        // data.append('upload_preset', 'x2njw8oz');
        const res = await axios({
            method: 'post',
            url: `${new URL("https://api.cloudinary.com/v1_1/dgzls16bt/image/upload")}`,
            data: _file
          });;
        console.log(res);
        resolve(res);
        return res
    });

}

const  pushPost = (content: any) => { 
    return new Promise<T>(resolve => {

        var file = content.getContent()
        var text = content.getContent({ format: "text" }) 
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
        resolve(db.ref().child('articles1').push().key)
        return response

    });

}

export {pushImage, pushPost};

