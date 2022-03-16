import { IonContent, IonPage } from '@ionic/react';

import './home.scss';
import AddFAB from '../../components/AddFab/AddFAB.jsx'; 
import PageHeader from '../../components/PageHeader/PageHeader';
import JobsList from '../../components/JobsList/JobsList';

const jobs = [
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

  return (
    <IonPage>
      <PageHeader title={'Jerbs'}/>
      <IonContent>
        <AddFAB />
        <JobsList jobs={jobs} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
