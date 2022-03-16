import { IonModal, IonButton } from '@ionic/react';
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
          <IonButton class='tab-button job-button' id={activeForm === 'Job' && 'active'} onClick={() => setActiveForm('Job')}>Job</IonButton>
          <IonButton class='tab-button company-button' id={activeForm === 'Company' && 'active'} onClick={() => setActiveForm('Company')}>Company</IonButton>
          <IonButton class='tab-button contact-button' id={activeForm === 'Contact' && 'active'} onClick={() => setActiveForm('Contact')}>Contacts</IonButton>
        </div>
      </IonModal>
    </>
  )
}

export default Form;