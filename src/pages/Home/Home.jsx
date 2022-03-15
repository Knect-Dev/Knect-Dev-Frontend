import { IonContent, IonPage } from '@ionic/react';
import { useState } from 'react';
// import ExploreContainer from '../../components/ExploreContainer';

<<<<<<< HEAD
import './Home.css';
import Form from '../../components/Form/Form.jsx';
import AddFAB from '../../components/AddFAB.jsx'; // BUG This works, but is linter still angry about this?
=======
import './home.css';
import AddFAB from '../../components/AddFab/AddFAB.jsx'; // BUG This works, but is linter still angry about this?
>>>>>>> dev
import PageHeader from '../../components/PageHeader/PageHeader';
import JobsList from '../../components/JobsList/JobsList';

const Home = () => {

  const [showForm, setShowForm] = useState(false);
  console.log(showForm);
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
