import { IonModal, IonContent, IonButton, IonItem, IonInput } from '@ionic/react';
import { useState } from 'react';

import JobForm from './Job/JobForm';
import CompanyForm from './Company/CompanyForm';
import ContactForm from './Contact/ContactForm';

import './Form.scss';

const Form = ({ showForm, setShowForm }) => {

  const [locked, setLocked] = useState(true);
  const [activeForm, setActiveForm] = useState('job');

  return (
    <>
      <IonModal
        isOpen={showForm}
        swipeToClose={true}
        backdropDismiss={false}
      >
        <IonButton onClick={() => setShowForm(!showForm)}>Close</IonButton>
        <div>
          <IonButton>Job</IonButton>
          <IonButton>Company</IonButton>
          <IonButton>Contact</IonButton>
        </div>
      </IonModal>
    </>
  )
}

export default Form;