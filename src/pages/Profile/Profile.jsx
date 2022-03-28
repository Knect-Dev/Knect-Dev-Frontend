import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ProfileContainer from '../../components/Profile/ProfileContainer';
import './profile.scss';

const Profile = () => {
  return (
    <IonPage>
      <IonContent>
          <PageHeader title={'Profile'} />
        <IonGrid style={{marginTop: '70px', padding: '10px'}}>
        <IonRow class="ion-justify-content-center">
          <IonCol size-xl='5' size-lg='7'  size-md='8' size-sm='10'>
          <ProfileContainer name='Profile page' />
          </IonCol>
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
