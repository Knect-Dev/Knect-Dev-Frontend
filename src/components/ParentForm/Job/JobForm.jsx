import { IonLabel, IonContent, IonIcon, IonInput, IonTextarea, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonChip, IonText } from '@ionic/react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { When } from 'react-if';
import { closeOutline, openOutline } from 'ionicons/icons';
import CompanySelector from '../../CompanySelector/CompanySelector.jsx';
import TrashButton from '../../TrashButton/TrashButton.jsx';
import LockButton from '../../LockButton/LockButton.jsx';
import { addJob } from '../../../store/jobs.js';
import { updateJob } from '../../../store/jobs.js';

import './jobForm.scss';

// selectedJobId replaces what was previously id
const JobForm = ({ disable, setDisable, showForm, setShowForm, setActiveForm, selectedJobId, setSelectedJobId, setSelectedCompanyId, deleteHandler }) => {

  let jobState = useSelector(state => state.jobs.jobs);
  let dispatch = useDispatch();
  let currentJob = jobState.find(job => job.id === selectedJobId);

  const [values, setValues] = useState(currentJob ? currentJob : {});
  const [lock, setLock] = useState(true);

  const token = useSelector(state => state.user.user.token);

  function handleChange(e) {
    setValues(prev => {
      return { ...prev, [e.target.name]: e.detail.value }
    });
  }

  function handleCompanyChange(change) {
    let { id, company } = change;
    setValues(prev => {
      return { ...prev, CompanyId: id, company: company }
    })
    setSelectedCompanyId(id);
  }

  function toggleActive(e) {
    setValues(prev => {
      return { ...prev, status: e.target.value }
    });
  }

  function handleCloseForm() {
    setShowForm(!showForm);
    setDisable(false);
    setLock(true);
    setSelectedJobId(null);
  }

  function toggleEditHandler(confirm) {
    if (confirm) {
      if (!selectedJobId) {
        if (values.title && values.company) {
          dispatch(addJob(values, token));
          setDisable(!disable);
          setLock(!lock);
        } else if (!values.title || !values.company) {
          setValues(currentJob || {});
          setSelectedJobId(null);
          setDisable(!disable);
          setLock(!lock);
        }
      } else if (selectedJobId) {
        dispatch(updateJob(values, token))
        setDisable(!disable);
        setLock(!lock);
      }
    } else if (!confirm) {
      setValues(currentJob || {});
      setDisable(!disable);
      setLock(!lock);
    }
  }

  const stageBackgrounds =['#80808099', '#F2C70088', '#8C00B080', '#CB006399','#6ADFC299', 'linear-gradient(326deg, rgba(255,0,184,0.9682247899159664) 12%, rgba(74,175,252,1) 50%, rgba(74,252,129,1) 76%, rgba(252,248,69,1) 89%)'];
  let options = ['Not Applied', 'Applied', 'Phone Screen', 'Tech Interview', 'Onsite', 'Offer'];
  let stageBackground = stageBackgrounds[options.findIndex( element => element === values.stage)];

  return (
    <>
      <IonContent>
        <IonGrid>
            <IonRow class={'ion-justify-content-between ion-align-items-center'} style={{background: stageBackground}}>
            <TrashButton currentJob={currentJob} deleteHandler={deleteHandler} handleCloseForm={handleCloseForm} />
            <IonText class='status-item ion-padding-start'><h3>{values?.stage || 'Application Status'}</h3></IonText>
            <IonIcon class="header-icon" icon={closeOutline} onClick={handleCloseForm}></IonIcon> 
            </IonRow>
          <When condition={lock}>
            {/* We can modify status background, or use inline styling to adjust the background color of row to represent the status */}
            <IonRow>
              <CompanySelector
                currentCompany={{ company: values?.company, id: values?.CompanyId }}
                setActiveForm={setActiveForm}
                handleCompanyChange={handleCompanyChange}
                setLock={setLock}
                setDisable={setDisable}
                lock={lock}
                disable={disable} />
              <IonCol size='6'><a href={values?.jobUrl}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none', color: 'black' }}>
                Job Posting <IonIcon icon={openOutline}></IonIcon>
              </a>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>Job:<h5>{values?.title}</h5></IonCol>
              <IonCol size='4'>ID:<h5>{values?.jobId}</h5></IonCol>
              <IonCol size='4'>Date Applied: <h5>{values?.appliedDate?.slice(0, 10)}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>Stage: <h5>{values?.stage}</h5></IonCol>
              <IonCol size='4'>Status:
                {values?.status ?
                  <IonChip style={{ display: 'block', width: '6rem', textAlign: 'center', fontSize: '1.3em' }} color="success"><IonLabel color="success">ACTIVE</IonLabel></IonChip>
                  :
                  <IonChip style={{ display: 'block', width: '6rem', textAlign: 'center', fontSize: '1.3em' }} color="danger"><IonLabel color="danger">INACTIVE</IonLabel></IonChip>}
              </IonCol>
              <IonCol size='4'>Positions Open: <h5>{values?.openPositions}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Location: <h5 style={{ display: 'inline' }}>{values?.location}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Technologies: <h5 style={{ display: 'inline' }}>{values?.technologies}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Notes: <h5>{values?.notes}</h5></IonCol>
            </IonRow>

          </When>
          <When condition={!lock}>

            <IonRow>
              <CompanySelector
                currentCompany={{ company: values?.company, id: values?.CompanyId }}
                setActiveForm={setActiveForm}
                handleCompanyChange={handleCompanyChange}
                setLock={setLock}
                setDisable={setDisable}
                lock={lock}
                disable={disable} />
              <IonCol size='6'>
                <IonLabel>Input Link to Job: </IonLabel>
                <IonTextarea value={values?.jobUrl} onIonChange={e => handleChange(e)} placeholder='Job URL' name='jobUrl' auto-grow clearInput></IonTextarea>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>
                <IonLabel>Job: </IonLabel>
                <IonTextarea value={values?.title} onIonChange={e => handleChange(e)} placeholder='Job Title' name='title' auto-grow clearInput></IonTextarea>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>ID: </IonLabel>
                <IonInput value={values?.jobId} onIonChange={e => handleChange(e)} placeholder='Job ID' name='jobId' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Date Applied: </IonLabel>
                <IonInput value={values?.appliedDate?.slice(0, 10)} onIonChange={e => handleChange(e)} placeholder='yyyy-mm-dd' name='appliedDate' clearInput></IonInput>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>
                <IonLabel>Stage: </IonLabel>
                <IonSelect value={values?.stage} multiple={false} cancelText="Cancel" okText="Okay" onIonChange={e => handleChange(e)} name='stage'>
                  {options.map((e, idx) => <IonSelectOption key={e + idx}>{e}</IonSelectOption>)}
                </IonSelect>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Status: </IonLabel>
                {values?.status ?
                  <IonChip onClick={e => toggleActive(e)} name='status' value={false} style={{ display: 'block', width: '6rem', textAlign: 'center', fontSize: '1.3em' }} color="success">ACTIVE</IonChip>
                  :
                  <IonChip onClick={e => toggleActive(e)} name='status' value={true} style={{ display: 'block', width: '6rem', textAlign: 'center', fontSize: '1.3em' }} color="danger">INACTIVE</IonChip>}
              </IonCol>

              <IonCol size='4'><IonLabel>Positions Open: </IonLabel>
                <IonInput value={values?.openPositions} type='number' min={0} onIonChange={e => handleChange(e)} placeholder='number' name='openPositions' clearInput></IonInput>
              </IonCol>

            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Location: </IonLabel>
                <IonInput value={values?.location} onIonChange={e => handleChange(e)} name='location' clearInput></IonInput>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Technologies: </IonLabel>
                <IonTextarea value={values?.technologies} onIonChange={e => handleChange(e)} name='technologies' auto-grow clearInput></IonTextarea>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='12'>
                <IonLabel>Notes: </IonLabel>
                <IonTextarea value={values?.notes} onIonChange={e => handleChange(e)} name='notes' auto-grow clearInput></IonTextarea>
              </IonCol>
            </IonRow>

          </When>
          <LockButton toggleEditHandler={toggleEditHandler} lock={lock} />
        </IonGrid>
      </IonContent>
    </>
  )
}

export default JobForm;