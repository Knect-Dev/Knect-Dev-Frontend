import { IonContent, IonPage } from '@ionic/react';
import { useLocation } from "react-router";
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/currentPage';
import { useState, useEffect } from 'react';
// import ExploreContainer from '../../components/ExploreContainer';

import './home.scss';

import Form from '../../components/ParentForm/ParentForm.jsx';
import AddFAB from '../../components/AddFab/AddFAB.jsx';
import PageHeader from '../../components/PageHeader/PageHeader';
import JobsList from '../../components/JobsList/JobsList';

const jobs = [ // TEMP
  {
    company: 'Amazon',
    title: 'burger flipper',
    jobId: '8098',
    appliedDate: '',
    stage: 'Applied',
    status: 'active',
    location: 'Seattle',
    technologies: 'Spatula, Grill',
    offer: '',
    notes:'Low-stress' 
  },
  {
    company: 'Boogie Woogie',
    title: 'Dancer',
    jobId: '',
    appliedDate: '',
    stage: 'Interview',
    status: 'Inactive',
    location: 'Seattle',
    technologies: '',
    offer: '',
    notes:'No compensation but great vibes' 
  },
  {
    company: 'Charlie\'s Chocolates',
    title: 'Chocolatier',
    jobId: '',
    appliedDate: '',
    stage: 'Offer',
    status: '',
    location: '',
    technologies: '',
    offer: '',
    notes:'' 
  },
  {
    company: 'Decks on Decks',
    title: 'Installer',
    jobId: '',
    appliedDate: '',
    stage: 'Offer',
    status: 'Active',
    location: '',
    technologies: '',
    offer: '',
    notes:'' 
  },
  {
    company: 'Everyone Shops Here',
    title: 'Developer',
    jobId: '',
    appliedDate: '',
    stage: '',
    status: '',
    location: '',
    technologies: '',
    offer: '',
    notes:'' 
  },
  {
    company: 'Faith, Hope, & Love',
    title: 'Software Develope',
    jobId: '',
    appliedDate: '',
    stage: '',
    status: '',
    location: '',
    technologies: '',
    offer: '',
    notes:'' 
  },
  {
    company: 'Golf Goobers',
    title: 'Caddy',
    jobId: '',
    appliedDate: '2/24/22',
    stage: 'Onsite',
    status: '',
    location: 'Atlanta',
    technologies: '',
    offer: 'lotsa money',
    notes:'' 
  },
  {
    company: 'Hotel Hotel',
    title: 'Bartender',
    jobId: '',
    appliedDate: '3/22/22',
    stage: '',
    status: '',
    location: 'Seattle',
    technologies: '',
    offer: '',
    notes:'' 
  },
]

const Home = () => {


  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(setCurrentPage(location.pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);




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
