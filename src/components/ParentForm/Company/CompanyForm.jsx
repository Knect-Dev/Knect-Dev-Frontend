import { IonLabel, IonContent, IonButton, IonIcon, IonItem, IonInput, IonTextarea, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonChip } from '@ionic/react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { When } from 'react-if';
import {getCompanies} from '../../../store/companies'

import { closeOutline } from 'ionicons/icons';
import { lockOpenOutline, lockClosedOutline } from 'ionicons/icons';

const CompanyForm = ({ state, id, disable, setDisable, showForm, setShowForm }) => {
  const [values, setValues] = useState({});
  const [lock, setLock] = useState(true);

  let companyState = useSelector(state => state.companies.companies);
  let dispatch = useDispatch();

  function handleChange(e) {
    if (!id) {

    } else if (id) {
      dispatch({ type: 'UPDATE_COMPANY', payload: { id: id, name: e.target.name, value: e.detail.value } });
    }
  }

  function toggleEditHandler() {
    if (!id) {

    } else if (id) {
      setDisable(!disable);
      setLock(!lock);
    }
  }
  
  useEffect(() => {
    console.log('useEffect called')
    dispatch(getCompanies);
  }, []);

  const currentCompany = companyState.find(company => company.id === id);

  return (
    <>
      <IonContent>
        <IonGrid>
          <When condition={lock}>

            <IonRow class='ion-justify-content-between status-background'>
              <IonItem class='status-item' >Application Status</IonItem>
              <IonButton class='job-button' color='danger' onClick={() => setShowForm(!showForm)}><IonIcon icon={closeOutline}></IonIcon></IonButton>
            </IonRow>

            <IonRow>
              <IonCol size='6'>{currentCompany?.name || 'Company Name with link to Company website'}</IonCol>
              <IonCol size='6'>{currentCompany?.careersURL || 'Career URL'}</IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>Leader:<h5>{currentCompany?.leader}</h5></IonCol>
              <IonCol size='4'>HQ: <h5>{currentCompany?.hq}</h5></IonCol>
              <IonCol size='4'>Size:<h5>{currentCompany?.size}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Product: <h5>{currentCompany?.product}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Clients: <h5>{currentCompany?.clients}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Mission: <h5>{currentCompany?.mission}</h5></IonCol>
            </IonRow >

          </When >
          <When condition={!lock}>
            <IonRow class='ion-justify-content-between status-background'>
              <IonItem class='status-item' >Application Status</IonItem>
              <IonButton class='job-button' color='danger' onClick={() => setShowForm(!showForm)}><IonIcon icon={closeOutline}></IonIcon></IonButton>
            </IonRow>

            <IonRow>
              <IonCol size='6'>{'Company Name'}</IonCol>
              <IonCol size='6'>Career Page</IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>
                <IonLabel>Leader: </IonLabel>
                <IonInput value={currentCompany?.leader} onIonChange={e => handleChange(e)} placeholder='Company Leader' name='leader' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>HQ: </IonLabel>
                <IonInput value={currentCompany?.hq} onIonChange={e => handleChange(e)} placeholder='HQ Location' name='hq' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Size: </IonLabel>
                <IonInput value={currentCompany?.size} type='number' step='1000' min='0' onIonChange={e => handleChange(e)} placeholder='# of employees' name='size' clearInput></IonInput>
              </IonCol >
            </IonRow >

            <IonRow>
              <IonCol>
                <IonLabel>Product: </IonLabel>
                <IonInput value={currentCompany?.product} onIonChange={e => handleChange(e)} name='product' clearInput></IonInput>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Clients: </IonLabel>
                <IonInput value={currentCompany?.clients} onIonChange={e => handleChange(e)} name='clients' clearInput></IonInput>
              </IonCol>
            </IonRow >

            <IonRow>
              <IonCol>
                <IonLabel>Mission: </IonLabel>
                <IonTextarea auto-grow value={currentCompany?.mission} onIonChange={e => handleChange(e)} name='mission' clearInput></IonTextarea>
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

export default CompanyForm;