import './profileContainer.css';
import { IonAvatar, IonIcon, IonContent, IonInput, IonItem, IonItemDivider} from '@ionic/react';
import {lockOpenOutline, lockClosedOutline } from 'ionicons/icons';
import { useState } from 'react';



const ProfileContainer = () => {


  const [editEnabled, setEditEnabled] = useState(false);

  console.log('editEnabled, ', editEnabled);

  const toggleEditHandler = () => {
    console.log('edit Handler triggered')
    editEnabled ? setEditEnabled(false) : setEditEnabled(true);
  }


  return (
    <IonContent >
      <IonAvatar class="avatar">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
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

      {/* <IonIcon class="edit-profile-icon" icon={createOutline} onClick={editProfileHandler}></IonIcon> */}
      {console.log('editEnabled: ', editEnabled)}
      {editEnabled ?
        <IonIcon class="edit-profile-icon" icon={lockOpenOutline} onClick={toggleEditHandler}></IonIcon>
        :
        <IonIcon class="edit-profile-icon" icon={lockClosedOutline} onClick={toggleEditHandler}></IonIcon>}

    </IonContent >
  );
};

export default ProfileContainer;
