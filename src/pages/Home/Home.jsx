import { IonContent, IonPage } from '@ionic/react';
import { useState } from 'react';
// import ExploreContainer from '../../components/ExploreContainer';


import './home.scss';
import Form from '../../components/ParentForm/ParentForm.jsx';
import AddFAB from '../../components/AddFab/AddFAB.jsx'; // BUG This works, but is linter still angry about this?
import PageHeader from '../../components/PageHeader/PageHeader';
import JobsList from '../../components/JobsList/JobsList';

const Home = () => {

  const [showForm, setShowForm] = useState(false);

  return (
    <IonPage>
      <PageHeader title={'Jorbs'}/>

      <IonContent fullscreen>
        
        <Form showForm={showForm} setShowForm={setShowForm} />
        <AddFAB showForm={showForm} setShowForm={setShowForm} />
        <JobsList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
