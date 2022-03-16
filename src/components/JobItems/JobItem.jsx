import {
  IonChip,
  IonIcon,
  IonItem,
  IonLabel
} from '@ionic/react';
import { magnetOutline } from 'ionicons/icons'; // placeholder for company logo


const JobItem = ({job}) => {

  return (
    <IonItem>
      {/* vvv placeholder for company logo */}
      <IonIcon icon={magnetOutline} slot="start" />
      <IonLabel slot=''>{job.company}</IonLabel>
      <IonLabel slot=''>Some job info here</IonLabel>
      <IonLabel slot=''>Salary</IonLabel>
      <IonLabel slot=''>Status</IonLabel>
      <IonChip slot="end" >99</IonChip>
    </IonItem>
  );
}

export default JobItem;