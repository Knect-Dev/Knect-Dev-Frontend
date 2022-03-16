import { IonModal, IonContent, IonButton, IonIcon, IonItem, IonInput, IonItemGroup } from '@ionic/react';
import { useState, useReducer } from 'react';
import { When } from 'react-if';

import JobForm from './Job/JobForm';
import CompanyForm from './Company/CompanyForm';
import ContactForm from './Contact/ContactForm';
import { initialState, reducer } from './FormReducer.jsx';

import { lockOpenOutline, lockClosedOutline } from 'ionicons/icons';

import './ParentForm.scss';

const Form = ({ showForm, setShowForm }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [activeForm, setActiveForm] = useState('Job');
  console.log(activeForm);
  console.log(activeForm === 'Job' && 'active')
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
          <IonButton size='large' class={`tab-button job-button ${activeForm === 'Job' && 'active'}`} onClick={() => setActiveForm('Job')}>Job</IonButton>
          <IonButton size='large' class={`tab-button company-button ${(activeForm === 'Company' && 'active')}`} onClick={() => setActiveForm('Company')}>Company</IonButton>
          <IonButton size='large' class={`tab-button contact-button ${(activeForm === 'Contact' && 'active')}`} onClick={() => setActiveForm('Contact')}>Contact</IonButton>
        </div>
      </IonModal>
    </>
  )
}

export default Form;