import { IonLabel, IonContent, IonButton, IonIcon, IonItem, IonInput, IonTextarea, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonChip } from '@ionic/react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { When } from 'react-if';

import { closeOutline } from 'ionicons/icons';
import { lockOpenOutline, lockClosedOutline } from 'ionicons/icons';

const JobForm = ({ id = 1, disable, setDisable, showForm, setShowForm, setActiveForm }) => {
  const [lock, setLock] = useState(true);

  let jobState = useSelector(state => state.jobs.jobs);
  let dispatch = useDispatch();

  function handleChange(e) {
    dispatch({ type: 'UPDATE_JOB', payload: { id: id, name: e.target.name, value: e.detail.value } });
  }

  function toggleActive(e) {
    setActive(!active);
    dispatch({ type: 'UPDATE_JOB', payload: { id: id, name: 'status', value: e.target.value } });
  }

  function toggleEditHandler() {
    setDisable(!disable);
    setLock(!lock);
  }

  let options = ['Not Applied', 'Applied', 'Phone Screen', 'Tech Interview', 'Onsite', 'Offer']

  let currentJob = jobState.find(job => job.id === id);
  const [active, setActive] = useState(currentJob?.status);

  return (
    <>
      <IonContent>
        <IonGrid>
          <When condition={lock}>

            <IonRow class='ion-justify-content-around'>
              <IonCol><IonItem color='success'>Application Status</IonItem></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='5' onClick={() => setActiveForm('Company')} style={{ cursor: 'pointer' }}>{currentJob?.company}</IonCol>
              <IonCol size='5'>Career Page</IonCol>
              <IonCol size='2'>
                <IonButton color='danger' onClick={() => setShowForm(!showForm)}><IonIcon icon={closeOutline}></IonIcon></IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>Job:<h5>{currentJob?.title}</h5></IonCol>
              <IonCol size='4'>ID:<h5>{currentJob?.jobId}</h5></IonCol>
              <IonCol size='4'>Date Applied: <h5>{currentJob?.appliedDate}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>Stage: <h5>{currentJob?.interviewStage}</h5></IonCol>
              <IonCol size='4'>Status:
                {active ?
                  <IonChip style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="success"><IonLabel color="success">ACTIVE</IonLabel></IonChip>
                  :
                  <IonChip style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="danger"><IonLabel color="danger">INACTIVE</IonLabel></IonChip>}
              </IonCol>
              <IonCol size='4'>Positions Open: <h5>{currentJob?.openPositions}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Location: <h5 style={{ display: 'inline' }}>{currentJob?.location}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Technologies: <h5 style={{ display: 'inline' }}>{currentJob?.technologies}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Notes: <h5>{currentJob?.notes}</h5></IonCol>
            </IonRow >

          </When >
          <When condition={!lock}>
            <IonRow class='ion-justify-content-around'>
              <IonCol><IonItem color='success'>Application Status</IonItem></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='5'>{currentJob?.company}</IonCol>
              <IonCol size='5'>Career Page</IonCol>
              <IonCol size='2'>
                <IonButton color='danger' onClick={() => setShowForm(!showForm)}><IonIcon icon={closeOutline}></IonIcon></IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>
                <IonLabel>Job: </IonLabel>
                <IonInput value={currentJob?.title} onIonChange={e => handleChange(e)} placeholder='Job Title' name='title' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>ID: </IonLabel>
                <IonInput value={currentJob?.jobId} onIonChange={e => handleChange(e)} placeholder='Job ID' name='jobId' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Date Applied: </IonLabel>
                <IonInput value={currentJob?.appliedDate} onIonChange={e => handleChange(e)} placeholder='mm/dd/yyyy' name='appliedDate' clearInput></IonInput>
              </IonCol >
            </IonRow >

            <IonRow>
              <IonCol size='4'>
                <IonLabel>Stage: </IonLabel>
                <IonSelect value={currentJob?.interviewStage} multiple={false} cancelText="Cancel" okText="Okay" onIonChange={e => handleChange(e)} name='interviewStage'>
                  {options.map((e, idx) => <IonSelectOption key={e + idx}>{e}</IonSelectOption>)}
                </IonSelect>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Status: </IonLabel>
                {currentJob?.status ?
                  <IonChip onClick={e => toggleActive(e)} name='status' value={false} style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="success">ACTIVE</IonChip>
                  :
                  <IonChip onClick={e => toggleActive(e)} name='status' value={true} style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="danger">INACTIVE</IonChip>}
              </IonCol>

              <IonCol size='4'><IonLabel>Positions Open: </IonLabel>
                <IonInput value={currentJob?.openPositions} type='number' min={0} onIonChange={e => handleChange(e)} placeholder='number' name='openPositions' clearInput></IonInput>
              </IonCol>

            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Location: </IonLabel>
                <IonInput value={currentJob?.location} onIonChange={e => handleChange(e)} name='location' clearInput></IonInput>
              </IonCol>
            </IonRow >

            <IonRow>
              <IonCol>
                <IonLabel>Technologies: </IonLabel>
                <IonInput value={currentJob?.technologies} onIonChange={e => handleChange(e)} name='technologies' clearInput></IonInput>
              </IonCol>
            </IonRow >

            <IonRow>
              <IonCol size='12'>
                <IonLabel>Notes: </IonLabel>
                <IonTextarea value={currentJob?.notes} onIonChange={e => handleChange(e)} name='notes' clearInput></IonTextarea>
              </IonCol>
            </IonRow >

          </When >
          {lock ?
            <IonIcon class="edit-form-icon-locked" icon={lockClosedOutline} onClick={toggleEditHandler}></IonIcon>
            :
            <IonIcon class="edit-form-icon-unlocked" icon={lockOpenOutline} onClick={toggleEditHandler} ></IonIcon>}
        </IonGrid >
      </IonContent>
    </>
  )
}

export default JobForm;