import { IonContent, IonPage } from '@ionic/react';
import { useLocation } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/currentPage';
import { useState, useEffect } from 'react';
// import ExploreContainer from '../../components/ExploreContainer';

import './home.scss';

import Form from '../../components/ParentForm/ParentForm.jsx';
import AddFAB from '../../components/AddFab/AddFAB.jsx';
import PageHeader from '../../components/PageHeader/PageHeader';
import JobsList from '../../components/JobsList/JobsList';
import { getJobs } from '../../store/jobs.js';
import { getCompanies } from '../../store/companies.js';

const Home = () => {

  const [showForm, setShowForm] = useState(false);
  const token = useSelector(state => state.user.user.token);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setCurrentPage(location.pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  
  //on page load grab all of the jobs
  //need to send a token
  useEffect(() => {
    dispatch(getJobs(token));
    dispatch(getCompanies(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IonPage>
      <PageHeader title={'Jorbs'} />
      <IonContent fullscreen> 
        <Form showForm={showForm} setShowForm={setShowForm} />
        <AddFAB showForm={showForm} setShowForm={setShowForm} />
        <JobsList getJobs={getJobs} getCompanies={getCompanies} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
