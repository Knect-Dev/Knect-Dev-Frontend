import './ProfileContainer.css';
import { IonAvatar } from '@ionic/react';
// import EditProfileModal


const ProfileContainer = () => {
  return (
    <div className="container">
      <IonAvatar class="avatar">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonAvatar>
      <p>Name: { }</p>
      <p>Email: { }</p>
      <p>Organization: { }</p>
      <p>Edit Profile <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ProfileContainer;
