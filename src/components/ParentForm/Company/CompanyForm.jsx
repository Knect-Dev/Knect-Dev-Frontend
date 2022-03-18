import { IonLabel, IonContent, IonIcon, IonInput, IonTextarea, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { When } from 'react-if';

import { closeOutline } from 'ionicons/icons';

import LockButton from '../../LockButton/LockButton.jsx';
import { addCompany } from '../../../store/companies.js';
import { updateCompany } from '../../../store/companies.js';

const CompanyForm = ({ disable, setDisable, showForm, setShowForm, selectedCompanyId }) => {

  let companyState = useSelector(state => state.companies.companies);
  let dispatch = useDispatch();

  let currentCompany = companyState.find(company => company.id === selectedCompanyId);
  const [values, setValues] = useState(currentCompany ? currentCompany : {});

  const [lock, setLock] = useState(true);
  
  const token = useSelector(state => state.user.user.token);

  function handleChange(e) {
    setValues(prev => {
      return { ...prev, [e.target.name]: e.detail.value }
    });
  }

  function toggleEditHandler(confirm) {
    if (confirm) {
      if (!selectedCompanyId) {
        if (values.title && values.company) {
          dispatch(addCompany(values, token));
          setDisable(!disable);
          setLock(!lock);
        } else if (!values.title || !values.company) {
          setValues(currentCompany || {});
          setDisable(!disable);
          setLock(!lock);
        }
      } else if (selectedCompanyId) {
        dispatch(updateCompany(values, token))
        setDisable(!disable);
        setLock(!lock);
      }
    } else if (!confirm) {
      setValues(currentCompany || {});
      setDisable(!disable);
      setLock(!lock);
    }
  }

  return (
    <>
      <IonContent>
        <IonGrid>
            <IonRow class='ion-justify-content-between status-background ion-align-items-center'>
              <IonText class='status-item ion-padding-start' ><h3>Company Information</h3></IonText>
              <IonIcon class="header-icon" icon={closeOutline} onClick={() => setShowForm(!showForm)}></IonIcon> 
            </IonRow>

          <When condition={lock}>

            <IonRow>
              <IonCol size='6' style={{ cursor: 'pointer' }}>Company: <h5 style={{ display: 'inline' }}>{values?.name}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>Leader:<h5>{values?.leader}</h5></IonCol>
              <IonCol size='4'>HQ: <h5>{values?.hq}</h5></IonCol>
              <IonCol size='4'>Size:<h5>{values?.size}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Product: <h5>{values?.product}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Clients: <h5>{values?.clients}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Mission: <h5>{values?.mission}</h5></IonCol>
            </IonRow >

          </When >
          <When condition={!lock}>

            <IonRow>
              <IonCol size='6'>{'Company Name'}</IonCol>
              <IonCol size='6'>Career Page</IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>
                <IonLabel>Leader: </IonLabel>
                <IonInput value={values?.leader} onIonChange={e => handleChange(e)} placeholder='Company Leader' name='leader' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>HQ: </IonLabel>
                <IonInput value={values?.hq} onIonChange={e => handleChange(e)} placeholder='HQ Location' name='hq' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Size: </IonLabel>
                <IonInput value={values?.size} type='number' step='1000' min='0' onIonChange={e => handleChange(e)} placeholder='# of employees' name='size' clearInput></IonInput>
              </IonCol >
            </IonRow >

            <IonRow>
              <IonCol>
                <IonLabel>Product: </IonLabel>
                <IonInput value={values?.product} onIonChange={e => handleChange(e)} name='product' clearInput></IonInput>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Clients: </IonLabel>
                <IonInput value={values?.clients} onIonChange={e => handleChange(e)} name='clients' clearInput></IonInput>
              </IonCol>
            </IonRow >

            <IonRow>
              <IonCol>
                <IonLabel>Mission: </IonLabel>
                <IonTextarea auto-grow value={values?.mission} onIonChange={e => handleChange(e)} name='mission' clearInput></IonTextarea>
              </IonCol>
            </IonRow >

          </When >
          <LockButton toggleEditHandler={toggleEditHandler} lock={lock} />
        </IonGrid >
      </IonContent>
    </>
  )
}

export default CompanyForm;