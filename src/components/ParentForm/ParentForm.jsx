import { IonModal, IonButton, IonAlert } from '@ionic/react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { When, If, Then, Else } from 'react-if';

import JobForm from './Job/JobForm';
import CompanyForm from './Company/CompanyForm';
import ContactForm from './Contact/ContactForm';

import LockButton from '../LockButton/LockButton.jsx';

import { addJob, updateJob, deleteJob } from '../../store/jobs.js';
import { addCompany, updateCompany } from '../../store/companies.js';

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
}) => {
  // NOTE: setSelectedJobId is what changes the state passed to the Job / Company / Contact forms
  // const jobState = useSelector(state => state.jobs.jobs);
  const token = useSelector(state => state.user.user.token);
  const dispatch = useDispatch();
  // console.log(companyState);
  let currentJob = useSelector(state => state.jobs.currentJob);
  // console.log(`👽 ~ file: ParentForm.jsx ~ line 39 ~ currentJob`, currentJob);
  let currentCompany = useSelector(state => state.companies.currentCompany);
  // console.log(`👽 ~ file: ParentForm.jsx ~ line 41 ~ currentCompany`, currentCompany);

  // let currentCompany = companyState.find(company => company.id === currentJob?.CompanyId);
  const [jobValues, setJobValues] = useState({});
  const [companyValues, setCompanyValues] = useState({});
  // const [contactValues, setContactValues] = useState({});
  const theme = document.getElementsByClassName('dark').length > 0;
  const [showAlert, setShowAlert] = useState({});

  useEffect(() => {
    setJobValues(currentJob || {});
    setCompanyValues(currentCompany || {});
  }, [currentCompany, currentJob]);

  function handleJobChange(e) {
    setJobValues(prev => {
      return { ...prev, [e.target.name]: e?.detail?.value || e?.target?.value }
    });
  }

  function handleCompanyChange(e) {
    setCompanyValues(prev => {
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
  }

  function toggleEditHandler(confirm) {
    if (confirm && activeForm === 'Job') {
      dispatch(updateJob(jobValues, token));
      setDisable(!disable);
      setLock(!lock);
    } else if (confirm && activeForm === 'Company') {
      dispatch(updateCompany(companyValues, token));
      setDisable(!disable);
      setLock(!lock);
    } else if (confirm && activeForm === 'Contact') {
      console.log('working on change')
      setDisable(!disable);
      setLock(!lock);
    } else if (!confirm) {
      setJobValues(currentJob || {});
      setDisable(!disable);
      setLock(!lock);
    }
  }

  function addToDatabase(confirm) {
    if (confirm && activeForm === 'Job') {
      if (jobValues.title && jobValues.company) {
        dispatch(addJob(jobValues, token));
        setShowForm(false);
        setDisable(!disable);
        setLock(!lock);
      } else if (!jobValues.title || !jobValues.company) {
        setJobValues(currentJob || {});
        setDisable(!disable);
        setLock(!lock);
      }
    } else if (confirm && activeForm === 'Company') {
      if (companyValues.name) {
        dispatch(addCompany(companyValues, token))
        setDisable(!disable);
        setLock(!lock);
      } else if (!companyValues.name) {
        setCompanyValues(currentCompany || {});
        setDisable(!disable);
        setLock(!lock);
      }
    } else if (confirm && activeForm === 'Contact') {
      console.log('contact added');
    } else if (!confirm) {
      setJobValues(currentJob || {});
      setCompanyValues(currentCompany || {});
    }
  }

  function handleClick(confirm) {
    addToDatabase(confirm);
  }

  function handleCloseForm() {
    setShowForm(!showForm)
    //-- Timeout is used to ensure fade of form when closing does not show blank form for split second --//
    setTimeout(() => {
      setDisable(false);
      setLock(true);
    }, 150)
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
            theme={theme}
            lock={lock}
            setLock={setLock}
            handleJobChange={handleJobChange}
            changeCompany={changeCompany}
            handleCloseForm={handleCloseForm}
            currentJob={currentJob}
            jobValues={jobValues}
            setJobValues={setJobValues}
            disable={disable}
            setDisable={setDisable}
            showForm={showForm}
            setShowForm={setShowForm}
            setActiveForm={setActiveForm}
            handleDelete={handleDelete}
          />
        </When>
        <When condition={activeForm === 'Company'}>
          <CompanyForm 
            theme={theme}
            lock={lock}
            setLock={setLock}
            disable={disable}
            setDisable={setDisable}
            handleCompanyChange={handleCompanyChange}
            handleCloseForm={handleCloseForm}
            currentCompany={currentCompany}
            companyValues={companyValues}
            setCompanyValues={setCompanyValues}
            showForm={showForm}
            setShowForm={setShowForm}
          />
        </When>
        <When condition={activeForm === 'Contact'}>
          <ContactForm 
            handleCloseForm={handleCloseForm}
            lock={lock}
            currentCompany={currentCompany}
            theme={theme} />
        </When>

        <div className='button-group'>  
          <If condition={selectedJobId}>
            <Then>
              <LockButton toggleEditHandler={toggleEditHandler} lock={lock} />
              <IonButton
                class={`tab-button job-button md button button-solid ion-activatable ion-focusable ${disable && 'locked'} ${theme && 'dark-job'}`}
                id={(activeForm === 'Job' && !disable) && 'active'}
                disabled={disable}
                onClick={() => setActiveForm('Job')}>
                Job
              </IonButton>

              <IonButton
                class={`tab-button button company-button md button button-solid ion-activatable ion-focusable ${disable && 'locked'} ${theme && 'dark-company'}`}
                id={(activeForm === 'Company' && !disable) && 'active'}
                disabled={disable}
                onClick={() => setActiveForm('Company')}>
                Company
              </IonButton>

              <IonButton
                class={`tab-button contact-button md button button-solid ion-activatable ion-focusable ${disable && 'locked'} ${theme && 'dark-contact'}`}
                id={(activeForm === 'Contact' && !disable) && 'active'}
                disabled={disable}
                onClick={() => setActiveForm('Contact')}>
                Contacts
              </IonButton>
            </Then>
            <Else>
              <IonButton expand='full' color='success' class='add-button' onClick={() => setShowAlert(true)}>{`Add ${activeForm}`}</IonButton>
            </Else>
          </If>
        </div>
      </IonModal>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass='my-custom-class'
        header={`Add ${activeForm}`}
        message={'Submit these changes and save to the database?'}
        buttons={[
          {
            text: 'Discard',
            id: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              handleClick(false);
            }
          },
          {
            text: 'Accept',
            id: 'accept',
            cssClass: 'success',
            handler: () => {
              handleClick(true);
            }
          }
        ]}
      />
    </>
  )
}

export default ParentForm;