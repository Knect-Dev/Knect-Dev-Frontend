import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { IonAvatar, IonIcon, IonInput, IonItem, IonCard,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol, IonCardContent, IonText, IonButton } from '@ionic/react';
import { mailOutline, keyOutline } from 'ionicons/icons';

import {signInUser} from '../../store/user';





function SignIn({ toggle }) {
  const dispatch = useDispatch();
  const [credentials, updateCredentials] = useState({});
  
  const handleChange = (event) => {
    updateCredentials({...credentials, [event.target.name]: event.detail.value} );
  }

  const handleSubmit = () => {
    if(credentials.email && credentials.password){
      dispatch(signInUser(credentials));
    }
  }

  return(
    <IonCard>
      <IonCardHeader class='ion-text-center'>
        <IonCardTitle style={{fontSize: '3em'}}>Sign-In</IonCardTitle>
      </IonCardHeader>
      <IonGrid>
        <IonRow>
          <IonCol>
          <IonCardContent>
            <IonAvatar class="avatar">
              <img src={require ('../../resources/knect_small.png')} alt="User avatar"/>
            </IonAvatar>
            <section id="profile-form">
              <IonItem>
                <IonIcon icon={mailOutline} style={{margin: 15}}/>
                <IonInput name="email" type="email" value={credentials?.email || ''} placeholder="email@domain.com" onIonChange={handleChange} ></IonInput>
              </IonItem>
              <IonItem>
              <IonIcon icon={keyOutline} style={{margin: 15}}/>
                <IonInput name="password" type="password" value={credentials?.password || ''} placeholder="Secure Password" onIonChange={handleChange} ></IonInput>
              </IonItem>
            </section>
            <IonButton onClick={handleSubmit} expand="block">
              Sign-In
            </IonButton>
            <IonText>
              <span>Don't have an account?</span>
            </IonText>
            <IonText color="primary" onClick={toggle}>
                <span style={{ cursor: 'pointer' }}> Sign-Up!</span>
            </IonText>
          </IonCardContent>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
}

export default SignIn;