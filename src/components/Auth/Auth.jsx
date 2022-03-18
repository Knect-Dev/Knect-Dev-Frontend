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
    <IonGrid style={{marginTop: '60px', padding: '40px'}}>
      <IonRow>
        <IonCol size='2' />
        <IonCol>
          {signIn ? <SignIn toggle={toggle} /> : <SignUp toggle={toggle} />}
        </IonCol>
        <IonCol size='2' />
      </IonRow>
    </IonGrid>
  );
}

export default Auth;
