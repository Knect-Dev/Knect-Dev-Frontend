
import { useState, useEffect } from 'react';
import { IonLabel, IonContent, IonButton, IonIcon, IonItem, IonInput, IonTextarea, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonChip } from '@ionic/react';
import { When } from 'react-if';
import { useDispatch } from 'react-redux';
import {getCompanies} from '../../../store/companies'

import { closeOutline } from 'ionicons/icons';
import { lockOpenOutline, lockClosedOutline } from 'ionicons/icons';

const CompanyForm = ({ state, dispatch, showForm, setShowForm }) => {
  const [lock, setLock] = useState(true);

  function handleChange(e) {
    dispatch({ type: 'SET_COMPANY', data: [e.target.name, e.detail.value] });
  }

  function toggleEditHandler() {
    setLock(!lock);
  }

  let dispatchRedux = useDispatch();

  useEffect(() => {
    console.log('useEffect called')
    dispatchRedux(getCompanies);
  });

  return (
    <>
      <IonContent>
        <IonGrid>
          <When condition={lock}>

            <IonRow class='ion-justify-content-around'>
              <IonCol><IonItem color='success'>Application Status</IonItem></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='5'>{state.company.name || 'Company Name with link to Company website'}</IonCol>
              <IonCol size='5'>{state.company.careersURL || 'Career URL'}</IonCol>
              <IonCol size='2'>
                <IonButton color='danger' onClick={() => setShowForm(!showForm)}><IonIcon icon={closeOutline}></IonIcon></IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>Leader:<h5>{state.company.leader}</h5></IonCol>
              <IonCol size='4'>HQ: <h5>{state.company.hq}</h5></IonCol>
              <IonCol size='4'>Size:<h5>{state.company.size}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Product: <h5>{state.company.product}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Clients: <h5>{state.company.clients}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Mission: <h5>{state.company.mission}</h5></IonCol>
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
                <IonLabel>Leader: </IonLabel>
                <IonInput value={state.company.leader} onIonChange={e => handleChange(e)} placeholder='Company Leader' name='leader' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>HQ: </IonLabel>
                <IonInput value={state.company.hq} onIonChange={e => handleChange(e)} placeholder='HQ Location' name='hq' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Size: </IonLabel>
                <IonInput value={state.company.size} onIonChange={e => handleChange(e)} placeholder='# of employees' name='size' clearInput></IonInput>
              </IonCol >
            </IonRow >

            <IonRow>
              <IonCol>
                <IonLabel>Product: </IonLabel>
                <IonInput value={state.company.product} onIonChange={e => handleChange(e)} name='product' clearInput></IonInput>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Clients: </IonLabel>
                <IonInput value={state.company.clients} onIonChange={e => handleChange(e)} name='clients' clearInput></IonInput>
              </IonCol>
            </IonRow >

            <IonRow>
              <IonCol>
                <IonLabel>Mission: </IonLabel>
                <IonTextarea value={state.company.mission} onIonChange={e => handleChange(e)} name='mission' clearInput></IonTextarea>
              </IonCol>
            </IonRow >

          </When >
          {lock ?
            <IonIcon class="edit-form-icon" icon={lockClosedOutline} onClick={toggleEditHandler}></IonIcon>
            :
            <IonIcon class="edit-form-icon" icon={lockOpenOutline} onClick={toggleEditHandler} ></IonIcon>}
        </IonGrid >
      </IonContent>
    </>
  )
}

export default CompanyForm;