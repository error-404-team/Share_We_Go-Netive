import firebase from '../../../firebase/config';
import Auth from '../../../firebase/auth';


const fbLoginPermissions = ['email'];

export const handleFbLogin = () => (
  Auth.Facebook.login(fbLoginPermissions)
    .then((token) => {
      firebase.auth()
        .signInWithCredential(firebase.auth.FacebookAuthProvider.credential(token))
    })
    .catch((err) => this.onError && this.onError(err))
);