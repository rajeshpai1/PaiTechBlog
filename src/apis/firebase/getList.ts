import firebase from "./firebase";

const db = firebase.database();
const PERMISSION_DENIED_STATUS_CODE = 'PERMISSION_DENIED';


const  getList = () => { 
    return new Promise<T>(resolve => {
        db.ref('articles').once('value').then((snapshot :any) => {
            resolve(snapshot.val());
          },
        );
    });

}

export default getList



