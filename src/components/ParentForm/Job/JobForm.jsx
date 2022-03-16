import { IonModal, IonLabel, IonContent, IonButton, IonIcon, IonItem, IonInput, IonTextarea, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonChip } from '@ionic/react';
import { useState } from 'react';
import { When } from 'react-if';

import { closeOutline, options } from 'ionicons/icons';
import { lockOpenOutline, lockClosedOutline } from 'ionicons/icons';

const JobForm = ({ state, dispatch, showForm, setShowForm }) => {
  const [lock, setLock] = useState(true);

  function handleChange(e) {
    dispatch({ type: 'SET_JOB', data: [e.target.name, e.detail.value] });
  }

  function toggleActive(e) {
    dispatch({ type: 'SET_JOB', data: ['active', e.target.value] });
  }

  function toggleEditHandler() {
    setLock(!lock);
  }

  let options = ['Applied', 'Phone Screen', 'Tech Interview', 'Onsite', 'Offer']

  return (
    <>
      <IonContent>
        <IonGrid>
          <When condition={lock}>

            <IonRow class='ion-justify-content-around'>
              <IonCol><IonItem color='success'>Application Status</IonItem></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='5'>{'Company Name'}</IonCol>
              <IonCol size='5'>Career Page</IonCol>
              <IonCol size='2'>
                <IonButton color='danger' onClick={() => setShowForm(!showForm)}><IonIcon icon={closeOutline}></IonIcon></IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>Job:<h4>{state.job.jobTitle}</h4></IonCol>
              <IonCol size='4'>ID:<h4>{state.job.jobId}</h4></IonCol>
              <IonCol size='4'>Date Applied: <h4>{state.job.dateApplied}</h4></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>Status:
                {state.job.active ?
                  <IonChip style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="success"><IonLabel color="success">ACTIVE</IonLabel></IonChip>
                  :
                  <IonChip style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="danger"><IonLabel color="danger">INACTIVE</IonLabel></IonChip>}
              </IonCol>
              <IonCol size='4'>Positions Open: <h4>{state.job.positions}</h4></IonCol>
              <IonCol size='4'>Stage: <h4>{state.job.interviewStage}</h4></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Technologies: <h4 style={{ display: 'inline' }}>{state.job.technologies}</h4></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Notes: <h5>{state.job.jobNotes}</h5></IonCol>
            </IonRow >

          </When >
          <When condition={!lock}>
            <IonRow class='ion-justify-content-around'>
              <IonCol><IonItem color='success'>Application Status</IonItem></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='5'>{'Company Name'}</IonCol>
              <IonCol size='5'>Career Page</IonCol>
              <IonCol size='2'>
                <IonButton color='danger' onClick={() => setShowForm(!showForm)}><IonIcon icon={closeOutline}></IonIcon></IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>
                <IonLabel>Job: </IonLabel>
                <IonInput value={state.job.jobTitle} onIonChange={e => handleChange(e)} placeholder='Job Title' name='jobTitle' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>ID: </IonLabel>
                <IonInput value={state.job.jobId} onIonChange={e => handleChange(e)} placeholder='Job ID' name='jobId' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Date Applied: </IonLabel>
                <IonInput value={state.job.dateApplied} onIonChange={e => handleChange(e)} placeholder='mm/dd/yyyy' name='dateApplied' clearInput></IonInput>
              </IonCol >
            </IonRow >

            <IonRow>
              <IonCol size='4'>
                <IonLabel>Status: </IonLabel>
                {state.job.active ?
                  <IonChip onClick={e => toggleActive(e)} name='active' value={false} style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="success">ACTIVE</IonChip>
                  :
                  <IonChip onClick={e => toggleActive(e)} name='active' value={true} style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="danger">INACTIVE</IonChip>}
              </IonCol>

              <IonCol size='4'><IonLabel>Positions Open: </IonLabel>
                <IonInput value={state.job.positions} type='number' min={0} onIonChange={e => handleChange(e)} placeholder='number' name='positions' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Stage: </IonLabel>
                <IonSelect value={state.job.interviewStage} multiple={false} cancelText="Cancel" okText="Okay" onIonChange={e => handleChange(e)} name='interviewStage'>
                  {options.map(e => <IonSelectOption>{e}</IonSelectOption>)}
                </IonSelect>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Technologies: </IonLabel>
                <IonInput value={state.job.technologies} onIonChange={e => handleChange(e)} name='technologies' clearInput></IonInput>
              </IonCol>
            </IonRow >

            <IonRow>
              <IonCol size='12'>
                <IonLabel>Notes: </IonLabel>
                <IonTextarea value={state.job.jobNotes} onIonChange={e => handleChange(e)} name='jobNotes' clearInput></IonTextarea>
              </IonCol>
            </IonRow >

          </When >
          {
            lock ?
              <IonIcon class="edit-profile-icon" icon={lockOpenOutline} onClick={toggleEditHandler} ></IonIcon>
              :
              <IonIcon class="edit-profile-icon" icon={lockClosedOutline} onClick={toggleEditHandler}></IonIcon>}
        </IonGrid >
      </IonContent>
    </>
  )
}

export default JobForm;