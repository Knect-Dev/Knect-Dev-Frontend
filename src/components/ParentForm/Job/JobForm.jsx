import { IonLabel, IonContent, IonIcon, IonInput, IonTextarea, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonChip, IonText, IonButton, IonItem } from '@ionic/react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { If, Then, When, Else } from 'react-if';
import { closeOutline, openOutline } from 'ionicons/icons';
import KnectIcon from '../../../resources/Knect.dev.png';
import CompanySelector from '../../CompanySelector/CompanySelector.jsx';
import TrashButton from '../../TrashButton/TrashButton.jsx';
// import LockButton from '../../LockButton/LockButton.jsx';
// import { addJob } from '../../../store/jobs.js';
// import { updateJob } from '../../../store/jobs.js';

import './jobForm.scss';

// selectedJobId replaces what was previously id
const JobForm = ({
  lock,
  setLock,
  handleJobChange,
  changeCompany,
  currentJob,
  jobValues,
  disable,
  setDisable,
  showForm,
  setShowForm,
  setActiveForm,
  selectedJobId,
  setSelectedJobId,
  setSelectedCompanyId,
  handleDelete
}) => {

  function handleCloseForm() {
    setShowForm(!showForm)
    //-- Timeout is used to ensure fade of form when closing does not show blank form for split second --//
    setTimeout(() => {
      setDisable(false);
      setLock(true);
      setSelectedJobId(null);
    }, 150)
  }

  const stageBackgrounds =['#80808099', '#F2C70088', '#8C00B080', '#CB006399','#6ADFC299', 'linear-gradient(326deg, rgba(255,0,184,0.9682247899159664) 12%, rgba(74,175,252,1) 50%, rgba(74,252,129,1) 76%, rgba(252,248,69,1) 89%)'];
  let options = ['Not Applied', 'Applied', 'Phone Screen', 'Tech Interview', 'Onsite', 'Offer'];
  let stageBackground = stageBackgrounds[options.findIndex(element => element === jobValues.stage)];

  return (
    <>
      <IonContent>
        <IonGrid>
            <IonRow class={'ion-justify-content-between ion-align-items-center'} style={{background: stageBackground}}>
            <If condition={selectedJobId}>
              <Then>
                <TrashButton currentJob={currentJob} handleDelete={handleDelete} handleCloseForm={handleCloseForm} />
              </Then>
              <Else>
                <img src={KnectIcon} alt='Knect Dev Small Icon' style={{ height: '2rem', paddingLeft: '.5rem' }} />
              </Else>
            </If>
            <IonText class='status-item ion-padding-start'><h3>{jobValues?.stage || 'New Job'}</h3></IonText>
            <IonIcon class="header-icon" icon={closeOutline} onClick={handleCloseForm}></IonIcon> 
            </IonRow>
          <When condition={lock}>
            {/* We can modify status background, or use inline styling to adjust the background color of row to represent the status */}
            <IonRow class="ion-padding-bottom">
              <IonCol size='auto'>
                <a href={jobValues?.jobUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'black' }}>
                  <h4 style={{ display: 'inline' }}>{jobValues?.title}</h4> <IonIcon icon={openOutline}></IonIcon>
                </a>
                &nbsp;at&nbsp;
                <h4 style={{ display: 'inline', cursor: 'pointer' }} onClick={() => setActiveForm('Company')}>{jobValues?.company}</h4>
              </IonCol>
            </IonRow>

            <IonRow class="ion-padding-bottom">
              {/* <IonCol size='4'><h5>{jobValues?.title}</h5></IonCol> */}
              <IonCol size='6'>Job ID: <h5 style={{ display: 'inline' }}>{jobValues?.jobId}</h5></IonCol>
              <IonCol size='6'>Applied: <h5 style={{ display: 'inline' }}>{jobValues?.appliedDate?.slice(0, 10)}</h5></IonCol>
            </IonRow>

            <IonRow class="ion-padding-bottom">
              <IonCol size='6'>Stage: <h5 style={{ display: 'inline' }}>{jobValues?.stage}</h5></IonCol>
              <IonCol size='6'>Status:
                {jobValues?.status ?
                  <IonChip style={{ display: 'inline', width: '6rem', textAlign: 'center', fontSize: '1.3em' }} color="success"><IonLabel color="success">ACTIVE</IonLabel></IonChip>
                  :
                  <IonChip style={{ display: 'inline', width: '6rem', textAlign: 'center', fontSize: '1.3em' }} color="danger"><IonLabel color="danger">INACTIVE</IonLabel></IonChip>}
              </IonCol>
            </IonRow>

            <IonRow class="ion-padding-bottom">
              <IonCol>Location: <h5 style={{ display: 'inline' }}>{jobValues?.location}</h5></IonCol>
            </IonRow>

            <IonRow class="ion-padding-bottom">
              <IonCol>Technologies: <h5 style={{ display: 'inline' }}>{jobValues?.technologies}</h5></IonCol>
            </IonRow>

            <IonRow class="ion-padding-bottom">
              <IonCol>Notes: <h5>{jobValues?.notes}</h5></IonCol>
            </IonRow>

          </When>
          <When condition={!lock}>

            <IonRow>
              <CompanySelector
                currentCompany={{ company: jobValues?.company, id: jobValues?.CompanyId }}
                setActiveForm={setActiveForm}
                changeCompany={changeCompany}
                setLock={setLock}
                setDisable={setDisable}
                lock={lock}
                disable={disable} />
              <IonCol size='6'>
                <IonLabel>Input Link to Job: </IonLabel>
                <IonTextarea value={jobValues?.jobUrl} onIonChange={e => handleJobChange(e)} placeholder='Job URL' name='jobUrl' auto-grow clearInput></IonTextarea>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>
                <IonLabel>Job: </IonLabel>
                <IonTextarea value={jobValues?.title} onIonChange={e => handleJobChange(e)} placeholder='Job Title' name='title' auto-grow clearInput></IonTextarea>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>ID: </IonLabel>
                <IonInput value={jobValues?.jobId} onIonChange={e => handleJobChange(e)} placeholder='Job ID' name='jobId' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Date Applied: </IonLabel>
                <IonInput value={jobValues?.appliedDate?.slice(0, 10)} onIonChange={e => handleJobChange(e)} placeholder='yyyy-mm-dd' name='appliedDate' clearInput></IonInput>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>
                <IonLabel>Stage: </IonLabel>
                <IonSelect value={jobValues?.stage} multiple={false} cancelText="Cancel" okText="Okay" onIonChange={e => handleJobChange(e)} name='stage'>
                  {options.map((e, idx) => <IonSelectOption key={e + idx}>{e}</IonSelectOption>)}
                </IonSelect>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Status: </IonLabel>
                {jobValues?.status ?
                  <IonChip onClick={e => handleJobChange(e)} name='status' value={false} style={{ display: 'block', width: '6rem', textAlign: 'center', fontSize: '1.3em' }} color="success">ACTIVE</IonChip>
                  :
                  <IonChip onClick={e => handleJobChange(e)} name='status' value={true} style={{ display: 'block', width: '6rem', textAlign: 'center', fontSize: '1.3em' }} color="danger">INACTIVE</IonChip>}
              </IonCol>

              <IonCol size='4'><IonLabel>Positions Open: </IonLabel>
                <IonInput value={jobValues?.openPositions} type='number' min={0} onIonChange={e => handleJobChange(e)} placeholder='number' name='openPositions' clearInput></IonInput>
              </IonCol>

            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Location: </IonLabel>
                <IonInput value={jobValues?.location} onIonChange={e => handleJobChange(e)} name='location' clearInput></IonInput>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Technologies: </IonLabel>
                <IonTextarea value={jobValues?.technologies} onIonChange={e => handleJobChange(e)} name='technologies' auto-grow clearInput></IonTextarea>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='12'>
                <IonLabel>Notes: </IonLabel>
                <IonTextarea value={jobValues?.notes} onIonChange={e => handleJobChange(e)} name='notes' auto-grow clearInput></IonTextarea>
              </IonCol>
            </IonRow>

          </When>
        </IonGrid>
      </IonContent>
    </>
  )
}

export default JobForm;