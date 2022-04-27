import { useState } from 'react';
import { IonDatetime, IonItem, IonLabel, IonPopover, IonContent, IonIcon, IonInput, IonTextarea, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonChip, IonText } from '@ionic/react';
import { If, Then, When, Else } from 'react-if';
import { closeOutline, openOutline } from 'ionicons/icons';
import KnectIconLight from '../../../resources/Knect.dev.png';
import KnectIconDark from '../../../resources/knect_dev_white.png';
import CompanySelector from '../../CompanySelector/CompanySelector.jsx';
import TrashButton from '../../TrashButton/TrashButton.jsx';

import './jobForm.scss';

// selectedJobId replaces what was previously id
const JobForm = ({
  theme,
  lock,
  setLock,
  setRedirect,
  handleJobChange,
  changeCompany,
  currentJob,
  jobValues,
  handleCloseForm,
  disable,
  setDisable,
  setActiveForm,
  handleDelete
}) => {
  const stageBackgrounds = ['#80808099', '#F2C70088', '#8C00B080', '#CB006399', '#6ADFC299', 'linear-gradient(320deg, #6ADFC290 15%, #CB006390, #8C00B070, #F2C70078 85% )'];
  let options = ['Not Applied', 'Applied', 'Phone Screen', 'Tech Interview', 'Onsite', 'Offer'];
  let stageBackground = stageBackgrounds[options.findIndex(element => element === jobValues.stage)];

  // holds applied date value
  const [popoverDate, setPopoverDate] = useState('');

  // formats date int mm-dd-yyyy format
  const formatDate = (date) => {
    if(!date) return '';

    let year = date.slice(0,4);
    let month = date.slice(5, 7)
    let day = date.slice(8, 10);

    return `${month}-${day}-${year}`
  }

  // handles date input 
  const handleDate = (date) => {

    // acts as the event object
    let dateObj = {
      target: {
        name: 'appliedDate',
        value: date.slice(0,10),
      }
    }    
    setPopoverDate(date.slice(0,10));
    handleJobChange(dateObj)
  }

  return (
    <>
      <IonContent>
        <IonGrid>
          <IonRow class={'ion-justify-content-between ion-align-items-center'} style={{ background: stageBackground || 'rgb(150, 150, 150, .50)' }}>
            <If condition={currentJob}>
              <Then>
                <TrashButton currentJob={currentJob} handleDelete={handleDelete} handleCloseForm={handleCloseForm} />
              </Then>
              <Else>
                <img src={theme ? KnectIconDark : KnectIconLight} alt='Knect Dev Small Icon' style={{ height: '2rem', paddingLeft: '.5rem' }} />
              </Else>
            </If>
            <IonText class='status-item ion-padding-start'><h3>{jobValues?.stage || 'New Job'}</h3></IonText>
            <IonIcon class='header-icon' icon={closeOutline} onClick={handleCloseForm}></IonIcon> 
            </IonRow>
          <When condition={lock}>
            {/* We can modify status background, or use inline styling to adjust the background color of row to represent the status */}
            <IonRow class='ion-padding-bottom'>
              <IonCol size='auto'>
                <h4 style={{ display: 'inline' }}>{jobValues?.title}</h4>
                {jobValues?.jobUrl && <a href={jobValues?.jobUrl || null}
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: 'none' }}>
                  <IonText style={{ color: '--ion-text-color' }}>
                    &nbsp;<IonIcon icon={openOutline}></IonIcon>
                  </IonText>
                </a>}
                &nbsp;at&nbsp;
                <h4 style={{ display: 'inline', cursor: 'pointer' }} onClick={() => setActiveForm('Company')}>{jobValues?.company}</h4>
              </IonCol>
            </IonRow>

            <IonRow class='ion-padding-bottom'>
              <IonCol size='6'>Job ID: <h5 style={{ display: 'inline' }}>{jobValues?.jobId}</h5></IonCol>
              <IonCol size='6'>Applied: <h5 style={{ display: 'inline' }}>{jobValues?.appliedDate?.slice(0, 10)}</h5></IonCol>
            </IonRow>

            <IonRow class='ion-padding-bottom'>
              <IonCol size='6'>Stage: <h5 style={{ display: 'inline' }}>{jobValues?.stage}</h5></IonCol>
              <IonCol size='6'>Status: &nbsp;
                {jobValues?.status ?
                  <IonChip style={{ display: 'inline', width: '6rem', textAlign: 'center', fontSize: '1.3em' }} color='success'><IonLabel color='success'>ACTIVE</IonLabel></IonChip>
                  :
                  <IonChip style={{ display: 'inline', width: '6rem', textAlign: 'center', fontSize: '1.3em' }} color='danger'><IonLabel color='danger'>INACTIVE</IonLabel></IonChip>}
              </IonCol>
            </IonRow>

            <IonRow class='ion-padding-bottom'>
              <IonCol>Location: <h5 style={{ display: 'inline' }}>{jobValues?.location}</h5></IonCol>
            </IonRow>

            <IonRow class='ion-padding-bottom'>
              <IonCol>Technologies: <h5 style={{ display: 'inline' }}>{jobValues?.technologies}</h5></IonCol>
            </IonRow>

            <IonRow class='ion-padding-bottom'>
              <IonCol>Notes: <h5 style={{ display: 'inline' }}>{jobValues?.notes}</h5></IonCol>
            </IonRow>

          </When>
          <When condition={!lock}>

            <IonRow>
              <IonCol size='6'>
                <IonLabel>Job Title: </IonLabel>
                <IonTextarea class='custom-input' value={jobValues?.title} onIonChange={e => handleJobChange(e)} placeholder='Software Dev' name='title' auto-grow clearInput></IonTextarea>
              </IonCol>
              <CompanySelector
                currentCompany={{ company: jobValues?.company, id: jobValues?.CompanyId }}
                setRedirect={setRedirect}
                setActiveForm={setActiveForm}
                changeCompany={changeCompany}
                setLock={setLock}
                setDisable={setDisable}
                lock={lock}
                disable={disable}
              />
            </IonRow>

            <IonRow>
              <IonCol size='12'>
                <IonLabel>Input Link to Job: </IonLabel>
                <IonTextarea class='custom-input' value={jobValues?.jobUrl} onIonChange={e => handleJobChange(e)} placeholder='https://www.madeupinc.com/jobs/2' name='jobUrl' auto-grow clearInput></IonTextarea>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='2' class='center-text'>
                <IonLabel>Applied: </IonLabel>
              </IonCol>
              <IonCol size='4'>


                <IonItem button={true} id='open-date-input' class='custom-input' className={popoverDate !== '' ? 'date-populated' : 'date-notpopulated'}>
                  <IonText slot='' id='popOverText' >{formatDate(popoverDate) || 'Select Date'}</IonText>
                  <IonPopover trigger='open-date-input' showBackdrop={false}>
                  <IonDatetime
                    showDefaultButtons={true}
                      presentation='date'
                    onIonChange={ev => handleDate(ev.detail.value)}
                  />
                </IonPopover>
                </IonItem>
              </IonCol>

              <IonCol size='2' class='center-text'>
                <IonLabel>Job ID: </IonLabel>
              </IonCol>
              <IonCol size='4'>
                <IonInput class='custom-input' value={jobValues?.jobId} onIonChange={e => handleJobChange(e)} placeholder='ID-12345' name='jobId' clearInput></IonInput>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='2' class='center-text'>
                <IonLabel>Stage: </IonLabel>
              </IonCol>
              <IonCol size='4' class='custom-input'>
                <IonSelect class='custom-input' value={jobValues?.stage} placeholder='Select Stage' multiple={false} cancelText='Cancel' okText='Okay' onIonChange={e => handleJobChange(e)} name='stage'>
                  {options.map((e, idx) => <IonSelectOption key={e + idx}>{e}</IonSelectOption>)}
                </IonSelect>
              </IonCol>

              <IonCol size='2' class='center-text'>
                <IonLabel>Status: </IonLabel>
              </IonCol>
              <IonCol size='4'>
                {jobValues?.status ?
                  <IonChip onClick={e => handleJobChange(e)} name='status' value={false} style={{ display: 'block', width: '6rem', textAlign: 'center', fontSize: '1.3em' }} color='success'>ACTIVE</IonChip>
                  :
                  <IonChip onClick={e => handleJobChange(e)} name='status' value={true} style={{ display: 'block', width: '6rem', textAlign: 'center', fontSize: '1.3em' }} color='danger'>INACTIVE</IonChip>}
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Location: </IonLabel>
                <IonInput class='custom-input' value={jobValues?.location} onIonChange={e => handleJobChange(e)} name='location' clearInput></IonInput>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Technologies: </IonLabel>
                <IonTextarea class='custom-input' value={jobValues?.technologies} onIonChange={e => handleJobChange(e)} name='technologies' auto-grow clearInput></IonTextarea>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='12'>
                <IonLabel>Notes: </IonLabel>
                <IonTextarea class='custom-input' value={jobValues?.notes} onIonChange={e => handleJobChange(e)} name='notes' auto-grow clearInput></IonTextarea>
              </IonCol>
            </IonRow>
          </When>
        </IonGrid>
      </IonContent>
    </>
  )
}

export default JobForm;