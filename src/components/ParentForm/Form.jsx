import { IonModal, IonContent, IonButton, IonItem, IonInput } from '@ionic/react';
import { useState } from 'react';
import { When } from 'react-if';

import JobForm from './Job/JobForm';
import CompanyForm from './Company/CompanyForm';
import ContactForm from './Contact/ContactForm';

import './Form.scss';

const Form = ({ showForm, setShowForm }) => {

  const [locked, setLocked] = useState(true);
  const [activeForm, setActiveForm] = useState('Job');
  const [values, setValues] = useState({});

  return (
    <>
      <IonModal
        isOpen={showForm}
        swipeToClose={true}
        backdropDismiss={false}
      >
        <IonButton onClick={() => setShowForm(!showForm)}>Close</IonButton>
        <When condition={activeForm === 'Job'}>
          <JobForm values={values} setValues={setValues} />
        </When>
        <When condition={activeForm === 'Company'}>
          <CompanyForm values={values} setValues={setValues} />
        </When>
        <When condition={activeForm === 'Contact'}>
          <ContactForm values={values} setValues={setValues} />
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