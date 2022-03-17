import { IonAvatar, IonIcon, IonContent, IonInput, IonItem, IonItemDivider,   IonCard,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol, IonCardContent, IonText, IonButton } from '@ionic/react';
  import { mailOutline, keyOutline, personOutline } from 'ionicons/icons';

function SignUp(props) {
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
                <IonInput type="name" value="" placeholder="Full Name" ></IonInput>
              </IonItem>
              <IonItem>
                <IonIcon icon={mailOutline} style={{margin: 15}}/>
                <IonInput type="email" value="" placeholder="email@domain.com" ></IonInput>
              </IonItem>
              <IonItem>
                <IonIcon icon={keyOutline} style={{margin: 15}}/>
                <IonInput type="password" value="" placeholder="Secure Password" ></IonInput>
              </IonItem>
            </section>
            <IonButton expand="block">
              Sign-Up
            </IonButton>
            <IonText>
              <span>Already have an account?</span>
            </IonText>
            <IonText color="primary">
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