import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ProfileContainer from '../../components/Profile/ProfileContainer';
import './profile.scss';

const Profile = () => {
  return (
    <IonPage>
      <IonContent>
          <PageHeader title={'Profile'} />
        <IonGrid>
        <IonRow>
          <IonCol size="2" />
          <IonCol size="8">
          <ProfileContainer name='Profile page' />
          </IonCol>
          <IonCol size="2" />
          </IonRow>
        </IonGrid>
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
