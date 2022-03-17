import { IonLabel, IonContent, IonButton, IonIcon, IonItem, IonInput, IonTextarea, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonChip } from '@ionic/react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { When } from 'react-if';

import { closeOutline } from 'ionicons/icons';
import { lockOpenOutline, lockClosedOutline } from 'ionicons/icons';

const JobForm = ({ id, disable, setDisable, showForm, setShowForm }) => {
  const [lock, setLock] = useState(true);
  id = 0;
  let jobState = useSelector(state => state.jobs.jobs);
  let dispatch = useDispatch();

  function handleChange(e) {
    dispatch({ type: 'SET_JOB', payload: { id: id, name: e.target.name, value: e.detail.value } });
  }

  function toggleActive(e) {
    dispatch({ type: 'SET_JOB', payload: { id: id, name: 'status', value: e.target.value } });
  }

  function toggleEditHandler() {
    setDisable(!disable);
    setLock(!lock);
  }

  let options = ['Not Applied', 'Applied', 'Phone Screen', 'Tech Interview', 'Onsite', 'Offer']

  return (
    <>
      <IonContent>
        <IonGrid>
          <When condition={lock}>

            <IonRow class='ion-justify-content-around'>
              <IonCol><IonItem color='success'>Application Status</IonItem></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='5'>{jobState[id].company || 'Company Name'}</IonCol>
              <IonCol size='5'>Career Page</IonCol>
              <IonCol size='2'>
                <IonButton color='danger' onClick={() => setShowForm(!showForm)}><IonIcon icon={closeOutline}></IonIcon></IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>Job:<h5>{jobState[id].title}</h5></IonCol>
              <IonCol size='4'>ID:<h5>{jobState[id].id}</h5></IonCol>
              <IonCol size='4'>Date Applied: <h5>{jobState[id].appliedDate}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>Stage: <h5>{jobState[id].interviewStage}</h5></IonCol>
              <IonCol size='4'>Status:
                {jobState[id].status ?
                  <IonChip style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="success"><IonLabel color="success">ACTIVE</IonLabel></IonChip>
                  :
                  <IonChip style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="danger"><IonLabel color="danger">INACTIVE</IonLabel></IonChip>}
              </IonCol>
              <IonCol size='4'>Positions Open: <h5>{jobState[id].openPositions}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Location: <h5 style={{ display: 'inline' }}>{jobState[id].location}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Technologies: <h5 style={{ display: 'inline' }}>{jobState[id].technologies}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Notes: <h5>{jobState[id].notes}</h5></IonCol>
            </IonRow >

          </When >
          <When condition={!lock}>
            <IonRow class='ion-justify-content-around'>
              <IonCol><IonItem color='success'>Application Status</IonItem></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='5'>{jobState[id].company}</IonCol>
              <IonCol size='5'>Career Page</IonCol>
              <IonCol size='2'>
                <IonButton color='danger' onClick={() => setShowForm(!showForm)}><IonIcon icon={closeOutline}></IonIcon></IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>
                <IonLabel>Job: </IonLabel>
                <IonInput value={jobState[id].title} onIonChange={e => handleChange(e)} placeholder='Job Title' name='title' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>ID: </IonLabel>
                <IonInput value={jobState[id].jobId} onIonChange={e => handleChange(e)} placeholder='Job ID' name='id' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Date Applied: </IonLabel>
                <IonInput value={jobState[id].appliedDate} onIonChange={e => handleChange(e)} placeholder='mm/dd/yyyy' name='appliedDate' clearInput></IonInput>
              </IonCol >
            </IonRow >

            <IonRow>
              <IonCol size='4'>
                <IonLabel>Stage: </IonLabel>
                <IonSelect value={jobState[id].interviewStage} multiple={false} cancelText="Cancel" okText="Okay" onIonChange={e => handleChange(e)} name='interviewStage'>
                  {options.map((e, idx) => <IonSelectOption key={e + idx}>{e}</IonSelectOption>)}
                </IonSelect>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Status: </IonLabel>
                {jobState[id].status ?
                  <IonChip onClick={e => toggleActive(e)} name='status' value={false} style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="success">ACTIVE</IonChip>
                  :
                  <IonChip onClick={e => toggleActive(e)} name='status' value={true} style={{ display: 'block', width: '6rem', textAlign: 'center' }} color="danger">INACTIVE</IonChip>}
              </IonCol>

              <IonCol size='4'><IonLabel>Positions Open: </IonLabel>
                <IonInput value={jobState[id].openPositions} type='number' min={0} onIonChange={e => handleChange(e)} placeholder='number' name='openPositions' clearInput></IonInput>
              </IonCol>

            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Location: </IonLabel>
                <IonInput value={jobState[id].location} onIonChange={e => handleChange(e)} name='location' clearInput></IonInput>
              </IonCol>
            </IonRow >

            <IonRow>
              <IonCol>
                <IonLabel>Technologies: </IonLabel>
                <IonInput value={jobState[id].technologies} onIonChange={e => handleChange(e)} name='technologies' clearInput></IonInput>
              </IonCol>
            </IonRow >

            <IonRow>
              <IonCol size='12'>
                <IonLabel>Notes: </IonLabel>
                <IonTextarea value={jobState[id].notes} onIonChange={e => handleChange(e)} name='notes' clearInput></IonTextarea>
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