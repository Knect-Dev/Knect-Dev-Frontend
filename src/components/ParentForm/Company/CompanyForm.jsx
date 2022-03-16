import { IonLabel, IonContent, IonButton, IonIcon, IonItem, IonInput, IonTextarea } from '@ionic/react';
import { useState, useEffect } from 'react';
import { When } from 'react-if';
import { useSelector, useDispatch } from 'react-redux';
import {getCompanies} from '../../../store/companies'

import { lockOpenOutline, lockClosedOutline } from 'ionicons/icons';

const CompanyForm = ({ state, dispatch }) => {
  const [lock, setLock] = useState(true);

  function handleChange(e) {
    dispatch({ type: 'SET_CONTACT', data: [e.target.name, e.detail.value] });
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
        <When condition={lock}>
          <IonItem>
            Company Name:  {state.company.companyName}
          </IonItem>
          <IonItem>
            Company:  {state.company.contactCompany}
          </IonItem>
          <IonItem>
            Role: {state.company.contactRole}
          </IonItem>
          <IonItem>
            Email: {state.company.contactEmail}
          </IonItem>
          <IonItem>
            LinkedIn: {state.company.contactLinkedIn}
          </IonItem>
          <IonItem>
            Phone Number: {state.company.contactPhone}
          </IonItem>
          <IonItem>
            Notes: {state.company.contactNotes}
          </IonItem>
        </When>
        <When condition={!lock}>
          <IonItem>
            <IonLabel>Name: </IonLabel>
            <IonInput value={state.company.companyName} onIonChange={e => handleChange(e)} name='contactName' placeholder="Enter Input" clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Company: </IonLabel>
            <IonInput value={state.company.contactCompany} onIonChange={e => handleChange(e)} name='contactCompany' placeholder="Enter Input" clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Role: </IonLabel>
            <IonInput value={state.company.contactRole} onIonChange={e => handleChange(e)} name='contactRole' placeholder="Enter Input" clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Email: </IonLabel>
            <IonInput value={state.company.contactEmail} onIonChange={e => handleChange(e)} name='contactEmail' placeholder="Enter Input" clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>LinkedIn: </IonLabel>
            <IonInput value={state.company.contactLinkedIn} onIonChange={e => handleChange(e)} name='contactLinkedIn' placeholder="Enter Input" clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Phone Number: </IonLabel>
            <IonInput value={state.company.contactPhone} onIonChange={e => handleChange(e)} name='contactPhone' placeholder="Enter Input" clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Notes: </IonLabel>
            <IonTextarea value={state.company.contactNotes} onIonChange={e => handleChange(e)} name='contactNotes' placeholder="Enter Input" clearInput></IonTextarea >
          </IonItem>
        </When>
        {lock ?
          <IonIcon class="edit-profile-icon" icon={lockOpenOutline} onClick={toggleEditHandler}></IonIcon>
          :
          <IonIcon class="edit-profile-icon" icon={lockClosedOutline} onClick={toggleEditHandler}></IonIcon>}
      </IonContent>
    </>
  )
}

export default CompanyForm;