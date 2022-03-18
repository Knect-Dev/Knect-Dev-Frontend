import { IonModal, IonButton } from '@ionic/react';
import { useState, useReducer } from 'react';
import { When } from 'react-if';

import JobForm from './Job/JobForm';
import CompanyForm from './Company/CompanyForm';
import ContactForm from './Contact/ContactForm';
import { initialState, reducer } from './FormReducer.jsx';

import './ParentForm.scss';

const ParentForm = ({ showForm, setShowForm, selectedJobId, setSelectedJobId }) => {
  // TODO This setState is what changes the state passed to the Job / Company / Contact forms


  const [activeForm, setActiveForm] = useState('Job');

  const [disable, setDisable] = useState(false);

  return (
    <>
      <IonModal
        isOpen={showForm}
        swipeToClose={true}
        backdropDismiss={false}  // <--- if you change this to true you can click on the background to dismiss the modal.
        id='form-modal'
      >
        <When condition={activeForm === 'Job'}>
          <JobForm selectedJobId={selectedJobId} showForm={showForm} disable={disable} setDisable={setDisable} setShowForm={setShowForm} setActiveForm={setActiveForm} />
        </When>
        <When condition={activeForm === 'Company'}>
          <CompanyForm selectedJobId={selectedJobId} showForm={showForm} disable={disable} setDisable={setDisable} setShowForm={setShowForm} />
        </When>
        <When condition={activeForm === 'Contact'}>
          <ContactForm selectedJobId={selectedJobId} showForm={showForm} disable={disable} setDisable={setDisable} setShowForm={setShowForm} />
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

export default ParentForm;