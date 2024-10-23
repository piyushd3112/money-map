import React from 'react'
import Header from '../components/header'
import SignupSigninComponent from '../components/SignupSignin'

// import { db } from '../firebase'


// const userRef = doc(db, "users", user.uid);
// const userData = await getDoc(userRef);
function Signup() {
  return (
    <div>
      <Header />
      <div className='wrapper'>
      <SignupSigninComponent />

      </div>
    </div>
  )
}

export default Signup