import { IonContent, IonPage } from '@ionic/react';

import './home.scss';
import AddFAB from '../../components/AddFab/AddFAB.jsx'; // BUG This works, but is linter still angry about this?
import PageHeader from '../../components/PageHeader/PageHeader';
import JobsList from '../../components/JobsList/JobsList';

const Home = () => {

  return (
    <IonPage>
      <PageHeader title={'Jorbs'}/>

      <IonContent fullscreen>
        
        <AddFAB />
        <JobsList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
