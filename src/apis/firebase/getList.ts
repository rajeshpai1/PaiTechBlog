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

const  getPost = () => { 
    return new Promise<T>(resolve => {
        db.ref('articles')
        .orderByChild('title')
        .equalTo("Las ‘startups’ se suben a la alta velocidad de la ciberinteligencia")
        .once('value')
        .then((snapshot :any) => {
            console.log('asdasdasdasdadsadsasdasd',snapshot.val())
            debugger
            resolve(Object.values(snapshot.val())[0]);
          },
        );
    });

};
export {getList, getPost};



