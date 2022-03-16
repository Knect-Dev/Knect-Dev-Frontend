import './profileContainer.scss';

import { IonAvatar, IonIcon, IonContent, IonInput, IonItem, IonItemDivider,   IonCard,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol, IonCardContent } from '@ionic/react';
import { lockOpenOutline, lockClosedOutline } from 'ionicons/icons';
import { useState } from 'react';



const ProfileContainer = () => {


  const [editEnabled, setEditEnabled] = useState(false);

  console.log('editEnabled, ', editEnabled);

  const toggleEditHandler = () => {
    console.log('edit Handler triggered')
    editEnabled ? setEditEnabled(false) : setEditEnabled(true);
  }


  return (
    <IonCard>
      <IonCardHeader class='ion-text-center'>
        <IonCardTitle>Profile</IonCardTitle>
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
        <IonItemDivider>Name</IonItemDivider>
        <IonItem>
          <IonInput value="" placeholder="First Name, Last Name" disabled={!editEnabled}></IonInput>
        </IonItem>

        <IonItemDivider>Email</IonItemDivider>
        <IonItem>
          <IonInput value="" placeholder="Email" disabled={!editEnabled}></IonInput>
        </IonItem>

        <IonItemDivider>Organization</IonItemDivider>
        <IonItem>
          <IonInput value="" placeholder="Code Fellows" disabled={!editEnabled}></IonInput>
        </IonItem>
      </section>
      {editEnabled ?
        <IonIcon class="edit-profile-icon" icon={lockOpenOutline} onClick={toggleEditHandler}></IonIcon>
        :
        <IonIcon class="edit-profile-icon" icon={lockClosedOutline} onClick={toggleEditHandler}></IonIcon>}

    
          </IonCardContent>
          </IonCol>
          <IonCol size="2" />
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default ProfileContainer;
