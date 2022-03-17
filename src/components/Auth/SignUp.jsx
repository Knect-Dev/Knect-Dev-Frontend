import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IonAvatar, IonIcon, IonInput, IonItem, IonCard,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol, IonCardContent, IonText, IonButton } from '@ionic/react';
import { mailOutline, keyOutline, personOutline } from 'ionicons/icons';
import { signUpUser } from '../../store/user';

function SignUp({toggle}) {
  
  const dispatch = useDispatch();
  const [credentials, updateCredentials] = useState({});
  
  const handleChange = (event) => {
    updateCredentials({...credentials, [event.target.name]: event.detail.value} );
  }

  const handleSubmit = () => {
    if(credentials.name && credentials.email && credentials.password ){
      dispatch(signUpUser(credentials));
      console.log(credentials);
    }
  }
  console.log(credentials);

  return(
    <IonCard>
      <IonCardHeader class='ion-text-center'>
        <IonCardTitle>Sign-Up</IonCardTitle>
      </IonCardHeader>
      <IonGrid>
        <IonRow>
          <IonCol size="2" />
          <IonCol>
          <IonCardContent>
            <IonAvatar class="avatar">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="User avatar"/>
            </IonAvatar>
            <section id="profile-form">
            <IonItem>
                <IonIcon icon={personOutline} style={{margin: 15}}/>
                <IonInput name="name" type="name" value={credentials.name} placeholder="Full Name" onIonChange={handleChange} ></IonInput>
              </IonItem>
              <IonItem>
                <IonIcon icon={mailOutline} style={{margin: 15}}/>
                <IonInput name="email" type="email" value={credentials.email} placeholder="email@domain.com" onIonChange={handleChange} ></IonInput>
              </IonItem>
              <IonItem>
                <IonIcon icon={keyOutline} style={{margin: 15}}/>
                <IonInput name="password" type="password" value={credentials.password} placeholder="Secure Password" onIonChange={handleChange}></IonInput>
              </IonItem>
            </section>
            <IonButton expand="block" onClick={handleSubmit}>
              Sign-Up
            </IonButton>
            <IonText>
              <span>Already have an account?</span>
            </IonText>
            <IonText color="primary" onClick={toggle}>
              <span> Log-In!</span>
            </IonText>
          </IonCardContent>
          </IonCol>
          <IonCol size="2" />
        </IonRow>
      </IonGrid>
    </IonCard>
  );
}

export default SignUp;