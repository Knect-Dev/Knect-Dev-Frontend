import {
  IonChip,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonGrid,
  IonCol,
} from '@ionic/react';
import { 
  magnetOutline, 
  flashOutline, 
  flashOffOutline,
  locateOutline,
  pulseSharp,
  skullOutline,
  removeOutline,
  speedometerOutline

} from 'ionicons/icons'; // placeholder for company logo
import './jobItem.scss';

const JobItem = ({ job, showForm, setShowForm, selectedJobId, setSelectedJobId }) => {

  const stageChipBkgrds = {
    'not applied': { background: '#80808099' },
    'applied': { background: '#F2C70088' },
    'phone screen': { background: '#8C00B080' },
    'tech interview': { background: '#CB006399' },
    'onsite': { background: '#6ADFC299' },
    'offer': { background: 'linear-gradient(326deg, rgba(255,0,184,0.9682247899159664) 12%, rgba(74,175,252,1) 50%, rgba(74,252,129,1) 76%, rgba(252,248,69,1) 89%)' }
  }
  /*
  GRADIENT OPTIONS
  
  linear-gradient(326deg, rgba(255,0,184,0.9682247899159664) 12%, rgba(74,175,252,1) 50%, rgba(74,252,129,1) 76%, rgba(252,248,69,1) 89%)

  linear-gradient(336deg, rgba(255,0,184,0.8925945378151261) 14%, rgba(74,175,252,0.9458158263305322) 50%, rgba(74,252,129,1) 78%, rgba(188,252,69,1) 89%)

  linear-gradient(349deg, rgba(180,58,150,1) 12%, rgba(253,64,29,1) 50%, rgba(252,221,69,1) 93%)

  linear-gradient(21deg, rgba(122,58,180,1) 8%, rgba(253,64,29,0.8253676470588236) 50%, rgba(252,221,69,1) 93%)
  
  radial-gradient(circle, rgba(122,58,180,0.8365721288515406) 6%, rgba(253,64,29,0.8253676470588236) 50%, rgba(252,221,69,1) 93%)
  
  linear-gradient(208deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)

  linear-gradient(208deg, rgba(145,58,180,0.923406862745098) 0%, rgba(253,64,29,0.8253676470588236) 50%, rgba(252,227,69,1) 100%)
  */

  let stageBGC = stageChipBkgrds[job?.stage?.toLowerCase()];

  let statusStyle = { 
    borderRadius: '50%',
    padding: '4px',
    fontSize: '1.3rem',
    marginLeft: '25%'
  };
  statusStyle.background = job.status === true ? '#A1F189AA' : '#80808099';

  function handleOnClick() {
    // update id in job form, then show form
    console.log('JOB ID: ', job.id)
    console.log('JOB: ', job)
    setSelectedJobId(job.id);
    setShowForm(!showForm);
  }

  return (
    <IonItem >
      <IonGrid>
        <IonRow onClick={handleOnClick}>

          <IonCol size='.3'>
            <IonIcon icon={magnetOutline} />
          </IonCol>

          <IonCol size='2'>
            <IonLabel >{job?.company}</IonLabel>
          </IonCol>

          <IonCol size='2.5'>
            <IonLabel >{job?.title}</IonLabel>
          </IonCol>

          <IonCol size='1.5'>
            <IonLabel >{job?.appliedDate?.slice(0, 10)}</IonLabel>
          </IonCol>

          <IonCol size='2'>
            <IonLabel > {job?.location}</IonLabel>
          </IonCol>

          <IonCol size='1'>
            {/* <IonItem style={statusStyle}> */}
              {
                job?.status === true ?
                  <IonIcon style={statusStyle} icon={pulseSharp}/> :
                  <IonIcon style={statusStyle} icon={skullOutline}/>
              }
            {/* </IonItem> */}
          </IonCol>

          <IonCol size='1.5'>
            <IonChip class='ion-justify-content-center  ion-align-items-center' style={stageBGC}>{job?.stage}</IonChip>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonItem>
  );
}


export default JobItem;
