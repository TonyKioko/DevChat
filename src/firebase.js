import firebase from'firebase/app'

import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


var config = {
    apiKey: "AIzaSyCKxpHyl4_sTYFMI3odLjgqwDMFuJgUrlw",
    authDomain: "react-slack-clone-260cd.firebaseapp.com",
    databaseURL: "https://react-slack-clone-260cd.firebaseio.com",
    projectId: "react-slack-clone-260cd",
    storageBucket: "react-slack-clone-260cd.appspot.com",
    messagingSenderId: "706584443864"
  };
  firebase.initializeApp(config);

  export default firebase;