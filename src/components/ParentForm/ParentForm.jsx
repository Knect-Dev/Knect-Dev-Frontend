import { IonModal, IonContent, IonButton, IonIcon, IonItem, IonInput, IonItemGroup } from '@ionic/react';
import { useState, useReducer } from 'react';
import { When } from 'react-if';

import JobForm from './Job/JobForm';
import CompanyForm from './Company/CompanyForm';
import ContactForm from './Contact/ContactForm';
import { initialState, reducer } from './FormReducer.jsx';

import './ParentForm.scss';

const Form = ({ showForm, setShowForm }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [activeForm, setActiveForm] = useState('Job');

  return (
    <>
      <IonModal
        isOpen={showForm}
        swipeToClose={true}
        backdropDismiss={false}
        id='form-modal'
      >
        <When condition={activeForm === 'Job'}>
          <JobForm state={state} dispatch={dispatch} showForm={showForm} setShowForm={setShowForm} />
        </When>
        <When condition={activeForm === 'Company'}>
          <CompanyForm state={state} dispatch={dispatch} showForm={showForm} setShowForm={setShowForm} />
        </When>
        <When condition={activeForm === 'Contact'}>
          <ContactForm state={state} dispatch={dispatch} showForm={showForm} setShowForm={setShowForm} />
        </When>
        <div className='button-group'>
          <IonButton size='large' onClick={() => setActiveForm('Job')}>Job</IonButton>
          <IonButton size='large' onClick={() => setActiveForm('Company')}>Company</IonButton>
          <IonButton size='large' onClick={() => setActiveForm('Contact')}>Contact</IonButton>
        </div>
      </IonModal>
    </>
  )
}

export default Form;