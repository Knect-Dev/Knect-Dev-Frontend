import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

function Auth(props) {
  const [signIn, setSignIn] = useState(true);

  const toggle = () => {
    setSignIn(!signIn);
  };

  return (
    <IonGrid style={{marginTop: '70px', padding: '10px'}}>
      <IonRow class="ion-justify-content-center">
        <IonCol size-xl='5' size-lg='7'  size-md='8' size-sm='10'>
          {signIn ? <SignIn toggle={toggle} /> : <SignUp toggle={toggle} />}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

export default Auth;
