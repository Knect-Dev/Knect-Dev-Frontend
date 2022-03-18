import { IonLabel, IonContent, IonButton, IonIcon, IonItem, IonInput, IonTextarea, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonChip } from '@ionic/react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { When } from 'react-if';

import { closeOutline } from 'ionicons/icons';

import LockButton from '../../lockButton/LockButton.jsx';
import { addJob } from '../../../store/jobs.js';
import { updateJob } from '../../../store/jobs.js';

import './jobForm.scss';

// selectedJobId replaces what was previously id
const JobForm = ({ disable, setDisable, showForm, setShowForm, setActiveForm, selectedJobId, setSelectedJobId }) => {




  let jobState = useSelector(state => state.jobs.jobs);
  let dispatch = useDispatch();

  // console.log('JOB ID FORM: ', jobState.job.id);
  console.log('SELECTED JOB ID: ', selectedJobId);
  let currentJob = jobState.find(job => job.id === selectedJobId);
  const [values, setValues] = useState(currentJob ? currentJob : {});

  console.log('CURRENT JOB: ', currentJob);
  const [lock, setLock] = useState(true);

  function handleChange(e) {
    setValues(prev => {
      return { ...prev, [e.target.name]: e.detail.value }
    });
  }

  function toggleActive(e) {
    setValues(prev => {
      return { ...prev, status: e.target.value }
    });
  }

  function toggleEditHandler(confirm) {
    if (confirm) {
      if (!selectedJobId) {
        values['company'] = 'Scuber';
        if (values.title && values.company) {
          dispatch(addJob(values));
          setDisable(!disable);
          setLock(!lock);
        } else if (!values.title || !values.company) {
          setValues(currentJob || {});
          setDisable(!disable);
          setLock(!lock);
        }
      } else if (selectedJobId) {
        dispatch(updateJob(values))
        setDisable(!disable);
        setLock(!lock);
      }
    } else if (!confirm) {
      setValues(currentJob || {});
      setDisable(!disable);
      setLock(!lock);
    }
  }

  let options = ['Not Applied', 'Applied', 'Phone Screen', 'Tech Interview', 'Onsite', 'Offer'];

  return (
    <>
      <IonContent>
        <IonGrid>
          <When condition={lock}>
            {/* We can modify status background, or use inline styling to adjust the background color of row to represent the status */}
            <IonRow class='ion-justify-content-between status-background'>
              <IonItem class='status-item' >Application Status</IonItem>
              <IonButton class='job-button' color='danger' onClick={() => setShowForm(!showForm)}><IonIcon icon={closeOutline}></IonIcon></IonButton>
            </IonRow>

            <IonRow>
              <IonCol size='6' onClick={() => setActiveForm('Company')} style={{ cursor: 'pointer' }}>{values?.company}</IonCol>
              <IonCol size='6'>Career Page</IonCol>
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
                  <IonChip style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="success"><IonLabel color="success">ACTIVE</IonLabel></IonChip>
                  :
                  <IonChip style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="danger"><IonLabel color="danger">INACTIVE</IonLabel></IonChip>}
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
            </IonRow >

          </When >
          <When condition={!lock}>
            <IonRow class='ion-justify-content-between status-background'>
              <IonItem class='status-item' >Application Status</IonItem>
              <IonButton class='job-button' color='danger' onClick={() => setShowForm(!showForm)}><IonIcon icon={closeOutline}></IonIcon></IonButton>
            </IonRow>

            <IonRow>
              <IonCol size='6'>{ }</IonCol>
              <IonCol size='6'>Career Page</IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>
                <IonLabel>Job: </IonLabel>
                <IonInput value={values?.title} onIonChange={e => handleChange(e)} placeholder='Job Title' required={true} name='title' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>ID: </IonLabel>
                <IonInput value={values?.jobId} onIonChange={e => handleChange(e)} placeholder='Job ID' name='jobId' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Date Applied: </IonLabel>
                <IonInput value={values?.appliedDate?.slice(0, 10)} onIonChange={e => handleChange(e)} placeholder='yyyy-mm-dd' name='appliedDate' clearInput></IonInput>
              </IonCol >
            </IonRow >

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
                  <IonChip onClick={e => toggleActive(e)} name='status' value={false} style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="success">ACTIVE</IonChip>
                  :
                  <IonChip onClick={e => toggleActive(e)} name='status' value={true} style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="danger">INACTIVE</IonChip>}
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
            </IonRow >

            <IonRow>
              <IonCol>
                <IonLabel>Technologies: </IonLabel>
                <IonInput value={values?.technologies} onIonChange={e => handleChange(e)} name='technologies' clearInput></IonInput>
              </IonCol>
            </IonRow >

            <IonRow>
              <IonCol size='12'>
                <IonLabel>Notes: </IonLabel>
                <IonTextarea value={values?.notes} onIonChange={e => handleChange(e)} name='notes' clearInput></IonTextarea>
              </IonCol>
            </IonRow >

          </When >
          <LockButton toggleEditHandler={toggleEditHandler} lock={lock} />
        </IonGrid >
      </IonContent>
    </>
  )
}

export default JobForm;