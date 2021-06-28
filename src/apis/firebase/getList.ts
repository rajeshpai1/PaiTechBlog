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

const  getPost = (id:string) => { 
    return new Promise<T>(resolve => {
        db.ref('articles1')
        .orderByChild('id')
        .equalTo(`${id}`)
        .once('value')
        .then((snapshot :any) => {
            resolve(Object.values(snapshot.val())[0]);
          },
        );
    });

};
export {getList, getPost};



