import { IonModal, IonButton } from '@ionic/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { When } from 'react-if';

import JobForm from './Job/JobForm';
import CompanyForm from './Company/CompanyForm';
import ContactForm from './Contact/ContactForm';
import { deleteJob } from '../../store/jobs.js';
import './ParentForm.scss';

const ParentForm = ({ showForm, setShowForm, activeForm, setActiveForm, selectedJobId, setSelectedJobId, selectedCompanyId, setSelectedCompanyId }) => {
  // NOTE: setSelectedJobId is what changes the state passed to the Job / Company / Contact forms
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);

  function deleteHandler(trgToDestroy) {
    let { id, type } = trgToDestroy;
    switch (type) {
      case 'JOB':
        dispatch(deleteJob(id));
        return;
        
      default:
        return;
    }
  }

  return (
    <>
      <IonModal
        isOpen={showForm}
        swipeToClose={true}
        backdropDismiss={false}  // <--- if you change this to true you can click on the background to dismiss the modal.
        id='form-modal'
      >
        <When condition={activeForm === 'Job'}>
          <JobForm 
            disable={disable}
            setDisable={setDisable}
            showForm={showForm}
            setShowForm={setShowForm}
            setActiveForm={setActiveForm}
            selectedJobId={selectedJobId}
            setSelectedJobId={setSelectedJobId}
            setSelectedCompanyId={setSelectedCompanyId}
            deleteHandler={deleteHandler} />
        </When>
        <When condition={activeForm === 'Company'}>
          <CompanyForm 
            disable={disable}
            setDisable={setDisable}
            showForm={showForm}
            setShowForm={setShowForm}
            selectedCompanyId={selectedCompanyId} />
        </When>
        <When condition={activeForm === 'Contact'}>
          <ContactForm 
            selectedJobId={selectedJobId}
            showForm={showForm}
            disable={disable}
            setDisable={setDisable}
            setShowForm={setShowForm} />
        </When>

        <div className='button-group'>  
          <IonButton 
            class={`tab-button job-button md button button-solid ion-activatable ion-focusable ${disable && 'locked'}`} 
            id={(activeForm === 'Job' && !disable) && 'active'} 
            disabled={disable} 
            onClick={() => setActiveForm('Job')}>
            Job
          </IonButton>

          <IonButton 
            class={`tab-button company-button md button button-solid ion-activatable ion-focusable ${disable && 'locked'}`}
            id={(activeForm === 'Company' && !disable) && 'active'} 
            disabled={disable} 
            onClick={() => setActiveForm('Company')}>
            Company
          </IonButton>
          
          <IonButton 
            class={`tab-button contact-button md button button-solid ion-activatable ion-focusable ${disable && 'locked'}`} 
            id={(activeForm === 'Contact' && !disable) && 'active'} 
            disabled={disable} 
            onClick={() => setActiveForm('Contact')}>
            Contacts
          </IonButton>
        </div>
      </IonModal>
    </>
  )
}

export default ParentForm;