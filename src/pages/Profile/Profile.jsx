import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar } from '@ionic/react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ProfileContainer from '../../components/Profile/ProfileContainer';
import './Profile.css';

const Profile = () => {
  return (
    <IonPage>
        <PageHeader title={'Profile'} />
        <ProfileContainer name="Profile page" />
    </IonPage>
  );
};

export default Profile;

// Image
// Name:
// Email:
// Organization:
// Edit
