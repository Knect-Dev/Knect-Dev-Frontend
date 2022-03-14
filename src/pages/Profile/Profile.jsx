import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar } from '@ionic/react';
import ProfileContainer from '../../components/Profile/ProfileContainer';
import './Profile.css';

const Profile = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile 1</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader >
          <IonToolbar>
            <IonTitle size="large">Profile 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProfileContainer name="Profile page" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;

// Image
// Name:
// Email:
// Organization:
// Edit
