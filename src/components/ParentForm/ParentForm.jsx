import { IonModal, IonContent, IonButton, IonItem, IonInput } from '@ionic/react';
import { useState, useReducer } from 'react';
import { When } from 'react-if';

import JobForm from './Job/JobForm';
import CompanyForm from './Company/CompanyForm';
import ContactForm from './Contact/ContactForm';
import { initialState, reducer } from './FormReducer.jsx';

import './Form.scss';

const Form = ({ showForm, setShowForm }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [activeForm, setActiveForm] = useState('Job');

  return (
    <>
      <IonModal
        isOpen={showForm}
        swipeToClose={true}
        backdropDismiss={false}
      >
        <IonButton onClick={() => setShowForm(!showForm)}>Close</IonButton>
        <When condition={activeForm === 'Job'}>
          <JobForm state={state} dispatch={dispatch} />
        </When>
        <When condition={activeForm === 'Company'}>
          <CompanyForm state={state} dispatch={dispatch} />
        </When>
        <When condition={activeForm === 'Contact'}>
          <ContactForm state={state} dispatch={dispatch} />
        </When>
        <div>
          <IonButton onClick={() => setActiveForm('Job')}>Job</IonButton>
          <IonButton onClick={() => setActiveForm('Company')}>Company</IonButton>
          <IonButton onClick={() => setActiveForm('Contact')}>Contact</IonButton>
        </div>
      </IonModal>
    </>
  )
}

export default Form;