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

          <IonCol>
            <IonIcon icon={magnetOutline} />
          </IonCol>

          <IonCol>
            <IonLabel >{job.company}</IonLabel>
          </IonCol>

          <IonCol>
            <IonLabel >{job.title}</IonLabel>
          </IonCol>

          <IonCol>
            <IonLabel >{job.appliedDate}</IonLabel>
          </IonCol>

          <IonCol>
            <IonLabel >{job.stage}</IonLabel>
          </IonCol>

          <IonCol>
            <IonLabel > {job.location}</IonLabel>
          </IonCol>

          <IonCol>
            <IonLabel > {job.offer}</IonLabel>
          </IonCol>

          <IonCol>
            <IonChip>{job.status}</IonChip>
          </IonCol>


        </IonRow>
      </IonGrid>
    </IonItem>
  );
}


export default JobItem;