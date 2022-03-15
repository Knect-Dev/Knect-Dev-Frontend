import './ProfileContainer.css';
import { IonAvatar, IonButton, IonIcon, IonToggle } from '@ionic/react';
// import EditProfileModal
import { useState } from 'react';
import { createOutline } from 'ionicons/icons';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';


const ProfileContainer = () => {

  // const [text, setText] = useState();
  const [editEnabled, setEditEnabled] = useState(false);

  const editProfileHandler = () => {
    editEnabled === false ? setEditEnabled(true) : setEditEnabled(false);
  }

  return (
    // <div className="container">
    //   <IonAvatar class="avatar">
    //     <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    //   </IonAvatar>
    //   <div className="container-text">
    //     <p>Name: Spencer{ }</p>
    //     <p>Email: spencerjtower1@gmail.com{ }</p>
    //     <p>Organization: Code Fellows{ }</p>

    //   <IonButton id="edit-profile-btn" size="small" color="secondary">Edit Profile</IonButton>
    // </div>
    <IonContent >
      <IonAvatar class="avatar">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonAvatar>
      <section id="profile-form">
        <IonItemDivider>Name</IonItemDivider>
        <IonItem>
          <IonInput value="" placeholder="First Name, Last Name" disabled={editEnabled}></IonInput>
        </IonItem>

        <IonItemDivider>Email</IonItemDivider>
        <IonItem>
          <IonInput value="" placeholder="Email" disabled={editEnabled}></IonInput>
        </IonItem>

        <IonItemDivider>Organization</IonItemDivider>
        <IonItem>
          <IonInput value="" placeholder="Code Fellows" disabled={editEnabled}></IonInput>
        </IonItem>
      </section>

      <IonIcon id="edit-profile-icon" icon={createOutline} onClick={editProfileHandler}></IonIcon>
    </IonContent >
  );
};

export default ProfileContainer;
