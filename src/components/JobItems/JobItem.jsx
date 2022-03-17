import {
  IonChip,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonGrid,
  IonCol,
} from '@ionic/react';
import { magnetOutline } from 'ionicons/icons'; // placeholder for company logo


const JobItem = ({ job }) => {

  return (
    <IonItem>
      <IonGrid>
        <IonRow>

          <IonCol size='.3'>
            <IonIcon icon={magnetOutline} />
          </IonCol>

          <IonCol size='2'>
            <IonLabel >{job.company}</IonLabel>
          </IonCol>

          <IonCol size='2.5'>
            <IonLabel >{job.title}</IonLabel>
          </IonCol>

          <IonCol size='1.5'>
            <IonLabel >{job.appliedDate}</IonLabel>
          </IonCol>

          <IonCol size='2'>
            <IonLabel > {job.location}</IonLabel>
          </IonCol>

          <IonCol size='1'>
            <IonChip>{job.status}</IonChip>
          </IonCol>

          <IonCol size='1.5'>
            <IonChip  >{job.stage}</IonChip>
          </IonCol>


        </IonRow>
      </IonGrid>
    </IonItem>
  );
}


export default JobItem;