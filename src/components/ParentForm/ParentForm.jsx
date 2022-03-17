import { IonModal, IonButton } from '@ionic/react';
import { useState, useReducer } from 'react';
import { When } from 'react-if';

import JobForm from './Job/JobForm';
import CompanyForm from './Company/CompanyForm';
import ContactForm from './Contact/ContactForm';
import { initialState, reducer } from './FormReducer.jsx';

import './ParentForm.scss';

const Form = ({ showForm, setShowForm }) => {

  const [state, setState] = useState({});
  /* {
    jobId: 
    companyId: job.companyId
  }
  */
  const [activeForm, setActiveForm] = useState('Job');

  const [disable, setDisable] = useState(false);

  return (
    <>
      <IonModal
        isOpen={showForm}
        swipeToClose={true}
        backdropDismiss={false}
        id='form-modal'
      >
        <When condition={activeForm === 'Job'}>
          <JobForm state={state} showForm={showForm} disable={disable} setDisable={setDisable} setShowForm={setShowForm} />
        </When>
        <When condition={activeForm === 'Company'}>
          <CompanyForm state={state} showForm={showForm} disable={disable} setDisable={setDisable} setShowForm={setShowForm} />
        </When>
        <When condition={activeForm === 'Contact'}>
          <ContactForm state={state} showForm={showForm} disable={disable} setDisable={setDisable} setShowForm={setShowForm} />
        </When>
        <div className='button-group'>
          <IonButton class={`tab-button job-button md button button-solid ion-activatable ion-focusable ${disable && 'locked'}`} id={(activeForm === 'Job' && !disable) && 'active'} disabled={disable} onClick={() => setActiveForm('Job')}>Job</IonButton>
          <IonButton class={`tab-button company-button md button button-solid ion-activatable ion-focusable ${disable && 'locked'}`} id={(activeForm === 'Company' && !disable) && 'active'} disabled={disable} onClick={() => setActiveForm('Company')}>Company</IonButton>
          <IonButton class={`tab-button contact-button md button button-solid ion-activatable ion-focusable ${disable && 'locked'}`} id={(activeForm === 'Contact' && !disable) && 'active'} disabled={disable} onClick={() => setActiveForm('Contact')}>Contacts</IonButton>
        </div>
      </IonModal>
    </>
  )
}

export default Form;