import { IonModal, IonButton } from '@ionic/react';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { When, If, Then, Else } from 'react-if';

import JobForm from './Job/JobForm';
import CompanyForm from './Company/CompanyForm';
import ContactForm from './Contact/ContactForm';

import LockButton from '../LockButton/LockButton.jsx';

import { addJob, updateJob, deleteJob } from '../../store/jobs.js';
import './ParentForm.scss';

const ParentForm = ({
  lock,
  setLock,
  disable,
  setDisable,
  showForm,
  setShowForm,
  activeForm,
  setActiveForm,
  selectedJobId,
  setSelectedJobId,
  selectedCompanyId,
  setSelectedCompanyId
}) => {
  // NOTE: setSelectedJobId is what changes the state passed to the Job / Company / Contact forms
  const jobState = useSelector(state => state.jobs.jobs);
  const token = useSelector(state => state.user.user.token);
  const dispatch = useDispatch();

  let currentJob = jobState.find(job => job.id === selectedJobId);
  const [jobValues, setJobValues] = useState({});
  useEffect(() => {
    setJobValues(currentJob || {});
  }, [selectedJobId]);

  function handleJobChange(e) {
    setJobValues(prev => {
      return { ...prev, [e.target.name]: e?.detail?.value || e?.target?.value }
    });
  }

  function handleDelete(trgToDestroy) {
    let { id, type } = trgToDestroy;
    switch (type) {
      case 'JOB':
        dispatch(deleteJob(id, token));
        return;
        
      default:
        return;
    }
  }

  function changeCompany(change) {
    let { id, company } = change;
    setJobValues(prev => {
      return { ...prev, CompanyId: id, company: company }
    })
    setSelectedCompanyId(id);
  }

  function toggleEditHandler(confirm) {
    if (confirm) {
      if (!selectedJobId) {
        if (jobValues.title && jobValues.company) {
          dispatch(addJob(jobValues, token));
          setShowForm(false);
          setDisable(!disable);
          setLock(!lock);
        } else if (!jobValues.title || !jobValues.company) {
          setJobValues(currentJob || {});
          setSelectedJobId(null);
          setDisable(!disable);
          setLock(!lock);
        }
      } else if (selectedJobId) {
        dispatch(updateJob(jobValues, token))
        setDisable(!disable);
        setLock(!lock);
      }
    } else if (!confirm) {
      setJobValues(currentJob || {});
      setDisable(!disable);
      setLock(!lock);
    }
  }

  function addToDatabase(payload) {
    let { type, confirm } = payload;
    if (confirm && type === 'Job') {
      if (jobValues.title && jobValues.company) {
        dispatch(addJob(jobValues, token));
        setShowForm(false);
        setDisable(!disable);
        setLock(!lock);
      } else if (!jobValues.title || !jobValues.company) {
        setJobValues(currentJob || {});
        setSelectedJobId(null);
        setDisable(!disable);
        setLock(!lock);
      }
    } else if (confirm && type === 'Company') {
      console.log('company added');
    } else if (confirm && type === 'Contact') {
      console.log('contact added');
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
            lock={lock}
            setLock={setLock}
            handleJobChange={handleJobChange}
            changeCompany={changeCompany}
            currentJob={currentJob}
            jobValues={jobValues}
            setJobValues={setJobValues}
            disable={disable}
            setDisable={setDisable}
            showForm={showForm}
            setShowForm={setShowForm}
            setActiveForm={setActiveForm}
            selectedJobId={selectedJobId}
            setSelectedJobId={setSelectedJobId}
            setSelectedCompanyId={setSelectedCompanyId}
            handleDelete={handleDelete} />
        </When>
        <When condition={activeForm === 'Company'}>
          <CompanyForm 
            disable={disable}
            setDisable={setDisable}
            showForm={showForm}
            setShowForm={setShowForm}
            selectedCompanyId={selectedCompanyId}
            setSelectedJobId={setSelectedJobId} />
        </When>
        <When condition={activeForm === 'Contact'}>
          <ContactForm 
            selectedJobId={selectedJobId}
            showForm={showForm}
            disable={disable}
            setDisable={setDisable}
            setShowForm={setShowForm}
            setSelectedJobId={setSelectedJobId} />
        </When>

        <div className='button-group'>  
          <If condition={selectedJobId}>
            <Then>
              <LockButton toggleEditHandler={toggleEditHandler} lock={lock} />
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
            </Then>
            <Else>
              <IonButton onClick={() => addToDatabase({ type: activeForm, confirm: true })}>Press Me</IonButton>
            </Else>
          </If>
        </div>
      </IonModal>
    </>
  )
}

export default ParentForm;