import { IonContent, IonPage } from '@ionic/react';

import './home.scss';
import AddFAB from '../../components/AddFab/AddFAB.jsx'; 
import PageHeader from '../../components/PageHeader/PageHeader';
import JobsList from '../../components/JobsList/JobsList';

const Home = () => {

  return (
    <IonPage>
      <PageHeader title={'Jerbs'}/>
      <IonContent>
        <AddFAB />
        <JobsList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
