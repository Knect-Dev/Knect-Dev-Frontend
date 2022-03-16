import { IonContent, IonPage } from '@ionic/react';

import { useState } from 'react';

import './home.scss';

import Form from '../../components/ParentForm/ParentForm.jsx';
import AddFAB from '../../components/AddFab/AddFAB.jsx';
import PageHeader from '../../components/PageHeader/PageHeader';
import JobsList from '../../components/JobsList/JobsList';

const jobs = [ // TEMP
  {company: 'Amazon'},
  {company:'Boogie Woogie'},
  {company:'Charlie\'s Chocolates'},
  {company:'Decks on Decks'},
  {company:'Everyone Shops Here'},
  {company:'Faith, Hope, & Love'},
  {company:'Golf Goobers'},
  {company:'Hotel Hotel'},
]
const Home = () => {

  const [showForm, setShowForm] = useState(false);

  return (
    <IonPage>
      <PageHeader title={'Jorbs'} />
       <IonContent fullscreen> {/* TEST does this mess up header/footer on scroll? */}
        <Form showForm={showForm} setShowForm={setShowForm} />
        <AddFAB showForm={showForm} setShowForm={setShowForm} />
        <JobsList jobs={jobs} /> {/* jobs prop is TEMP */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
