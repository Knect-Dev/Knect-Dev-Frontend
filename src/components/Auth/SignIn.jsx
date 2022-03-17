import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { IonAvatar, IonIcon, IonContent, IonInput, IonItem, IonItemDivider,   IonCard,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol, IonCardContent, IonText, IonButton } from '@ionic/react';
  import { mailOutline, keyOutline } from 'ionicons/icons';



function SignIn({ toggle }) {
  const dispatch = useDispatch();
  const [credentials, updateCredentials] = useState({});
  
  const handleChange = (event) => {
    updateCredentials({...credentials, [event.target.name]: event.detail.value} );
  }
  console.log(credentials);

  return(
    <IonCard>
      <IonCardHeader class='ion-text-center'>
        <IonCardTitle>Sign-In</IonCardTitle>
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
                <IonIcon icon={mailOutline} style={{margin: 15}}/>
                <IonInput name="email" type="email" value={credentials?.email || ''} placeholder="email@domain.com" onIonChange={handleChange} ></IonInput>
              </IonItem>
              <IonItem>
              <IonIcon icon={keyOutline} style={{margin: 15}}/>
                <IonInput name="password" type="password" value={credentials?.password || ''} placeholder="Secure Password" onIonChange={handleChange} ></IonInput>
              </IonItem>
            </section>
            <IonButton expand="block">
              Sign-In
            </IonButton>
            <IonText>
              <span>Don't have an account?</span>
            </IonText>
            <IonText color="primary" onClick={toggle}>
              <span> Sign-Up!</span>
            </IonText>
          </IonCardContent>
          </IonCol>
          <IonCol size="2" />
        </IonRow>
      </IonGrid>
    </IonCard>
  );
}

export default SignIn;