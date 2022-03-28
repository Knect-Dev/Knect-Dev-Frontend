import './profileContainer.scss';

import { IonAvatar, IonIcon, IonInput, IonItem, IonItemDivider, IonCard,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol, IonCardContent } from '@ionic/react';
import { lockOpenOutline, lockClosedOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';



const ProfileContainer = () => {

  const user = useSelector(state => state.user.user);
  const [editEnabled, setEditEnabled] = useState(false);

  const toggleEditHandler = () => {
    editEnabled ? setEditEnabled(false) : setEditEnabled(true);
  }


  return (
    <IonCard>
      <IonCardHeader class='ion-text-center'>
        <IonCardTitle>Profile</IonCardTitle>
      </IonCardHeader>
      <IonGrid>
        <IonRow>
          <IonCol>
          <IonCardContent>
      <IonAvatar class="avatar">
        <img src={require ('../../resources/knect_small.png')} alt="User avatar"/>
      </IonAvatar>
      <section id="profile-form">
        <IonItemDivider>Name</IonItemDivider>
        <IonItem>
          <IonInput value={user.name} placeholder="First Name, Last Name" disabled={!editEnabled}></IonInput>
        </IonItem>

        <IonItemDivider>Email</IonItemDivider>
        <IonItem>
          <IonInput value={user.email} placeholder="Email" disabled={!editEnabled}></IonInput>
        </IonItem>
      </section>
      {editEnabled ?
        <IonIcon class="edit-profile-icon" icon={lockOpenOutline} onClick={toggleEditHandler}></IonIcon>
        :
        <IonIcon class="edit-profile-icon" icon={lockClosedOutline} onClick={toggleEditHandler}></IonIcon>}
          </IonCardContent>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default ProfileContainer;
