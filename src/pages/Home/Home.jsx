import { IonContent, IonPage } from '@ionic/react';
import { useLocation } from "react-router";
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/currentPage';
import { useState, useEffect } from 'react';
// import ExploreContainer from '../../components/ExploreContainer';

import './home.scss';

import Form from '../../components/ParentForm/ParentForm.jsx';
import AddFAB from '../../components/AddFab/AddFAB.jsx'; // BUG This works, but is linter still angry about this?
import PageHeader from '../../components/PageHeader/PageHeader';
import JobsList from '../../components/JobsList/JobsList';

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

      <IonContent fullscreen>

        <Form showForm={showForm} setShowForm={setShowForm} />
        <AddFAB showForm={showForm} setShowForm={setShowForm} />
        <JobsList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
