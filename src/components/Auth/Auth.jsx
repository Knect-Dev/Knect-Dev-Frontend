import {useState} from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Auth(props) {
  const [signIn, setSignIn] = useState(true);

  const toggle = () => {
    setSignIn(!signIn);
  } 

  return(
    <>
    {signIn ? <SignIn toggle={toggle}/> :
      <SignUp toggle={toggle}/>
    } 
    </>
  )
}

export default Auth;