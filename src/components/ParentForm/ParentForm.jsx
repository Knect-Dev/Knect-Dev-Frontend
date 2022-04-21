import { IonModal, IonButton, IonAlert } from '@ionic/react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { When, If, Then, Else } from 'react-if';

import JobForm from './Job/JobForm';
import CompanyForm from './Company/CompanyForm';
import ContactForm from './Contact/ContactForm';

import LockButton from '../LockButton/LockButton.jsx';

import { addJob, updateJob, deleteJob, setCurrentJob } from '../../store/jobs.js';
import { addCompany, updateCompany, setCurrentCompany } from '../../store/companies.js';

import './ParentForm.scss';

const ParentForm = ({
  lock,
  setLock,
  adding,
  setAdding,
  disable,
  setDisable,
  showForm,
  setShowForm,
  activeForm,
  setActiveForm,
}) => {

  const dispatch = useDispatch();

  const token = useSelector(state => state.user.user.token);
  let currentJob = useSelector(state => state.jobs.currentJob);
  // console.log(`👽 ~ file: ParentForm.jsx ~ line 39 ~ currentJob`, currentJob);
  let currentCompany = useSelector(state => state.companies.currentCompany);
  // console.log(`👽 ~ file: ParentForm.jsx ~ line 41 ~ currentCompany`, currentCompany);
  let currentContacts = useSelector(state => state.contacts.currentContacts);
  // console.log(`👽 ~ file: ParentForm.jsx ~ line 41 ~ currentCompany`, currentCompany);

  const [jobValues, setJobValues] = useState({});
  const [companyValues, setCompanyValues] = useState({});
  // const [contactValues, setContactValues] = useState({});
  
  //-- This theme is used to make custom CSS properties for various form elements, by passing it into each form and used with conditional rendering --//
  const theme = document.getElementsByClassName('dark').length > 0;
  const [showAlert, setShowAlert] = useState({});
  const [redirect, setRedirect] = useState(false);

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
      console.log('working on change');
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
      dispatch(addJob(jobValues, token));
      dispatch(setCurrentCompany(jobValues.CompanyId));
    } else if (confirm && activeForm === 'Company') {
      dispatch(addCompany(companyValues, token));
    } else if (confirm && activeForm === 'Contact') {
      console.log('contact added');
    } else if (!confirm) {
      setJobValues(currentJob || {});
      setCompanyValues(currentCompany || {});
    }
  }

  function handleSubmit(confirm) {
    switch (activeForm) {
      case 'Job':
        if(jobValues.title && jobValues.company) {
          addToDatabase(confirm);
          setShowForm(false);
          setAdding(false);
          setShowForm(true);
          setDisable(false);
          setLock(true);
        } else if (!jobValues.title || !jobValues.company) {
          console.log('this should be a toast to remind use to add job title and company');
        }
        break;
      case 'Company':
        if(companyValues.name) {
          addToDatabase(confirm);
          setShowForm(false);
          dispatch(setCurrentCompany(null));
          if (redirect) {
            setTimeout(() => {
              setShowForm(true);
              setActiveForm('Job');
              setDisable(false);
              setLock(false);
              setRedirect(false);
            }, 500);
          };
        } else if (!companyValues.name) {
          console.log('this should be a toast to remind use to add company title');
        }
        break;
      default:
        console.log('nothing')
    }
  }

  function handleCloseForm() {
    setShowForm(!showForm);
    //-- Timeout is used to ensure fade of form when closing does not show blank form for split second --//
    setTimeout(() => {
      setAdding(false);
      setDisable(false);
      setLock(true);
      dispatch(setCurrentJob(null));
      dispatch(setCurrentCompany(null));
    }, 150)
  }

  function handleAdd() {
    setShowAlert(true);
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
            setRedirect={setRedirect}
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
          <If condition={!adding}>
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
              <IonButton expand='full' color='success' class='add-button' onClick={handleAdd}>{`Add ${activeForm}`}</IonButton>
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
              handleSubmit(false);
            }
          },
          {
            text: 'Accept',
            id: 'accept',
            cssClass: 'success',
            handler: () => {
              handleSubmit(true);
            }
          }
        ]}
      />
    </>
  )
}

export default ParentForm;