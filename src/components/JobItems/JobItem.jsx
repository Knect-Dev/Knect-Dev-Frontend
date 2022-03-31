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
  pulseSharp,
  skullOutline,
} from 'ionicons/icons'; // placeholder for company logo
import { useDispatch } from 'react-redux';
import { setCurrentJob } from '../../store/jobs.js';
import { setCurrentCompany } from '../../store/companies.js';

import './jobItem.scss';

const JobItem = ({ job, showForm, setShowForm, setSelectedJobId, setSelectedCompanyId }) => {

  const dispatch = useDispatch();

  const stageChipBkgrds = {
    'not applied': { background: '#80808099' },
    'applied': { background: '#F2C70088' },
    'phone screen': { background: '#8C00B080' },
    'tech interview': { background: '#CB006399' },
    'onsite': { background: '#6ADFC299' },
    'offer': { background: 'linear-gradient(320deg, #6ADFC290 15%, #CB006390, #8C00B070, #F2C70078 85% )' }
  }

  let stageBGC = stageChipBkgrds[job?.stage?.toLowerCase()];

  let statusStyle = { 
    borderRadius: '50%',
    padding: '4px',
    fontSize: '1.3rem',
    marginLeft: '25%'
  };
  statusStyle.background = job.status === true ? '#A1F189AA' : '#EC838F';

  function handleOnClick() {
    // update id in job form, then show form
    setSelectedJobId(job.id);
    setSelectedCompanyId(job.CompanyId);
    dispatch(setCurrentJob(job.id));
    dispatch(setCurrentCompany(job.CompanyId));
    setShowForm(!showForm);
  }

  return (
    <IonItem class='custom-list-item'>
      <IonGrid>
        <IonRow onClick={handleOnClick}>

          <IonCol class='align-items-center' size='.3'>
            <IonIcon icon={magnetOutline} />
          </IonCol>

          <IonCol class='align-items-center' size='2'>
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
