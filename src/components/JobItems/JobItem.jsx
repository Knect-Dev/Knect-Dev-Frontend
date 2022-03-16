import {
  IonChip,
  IonIcon,
  IonItem,
  IonLabel
} from '@ionic/react';
import { magnetOutline } from 'ionicons/icons'; // placeholder for company logo

function handleClick({ target }) {
  console.log(`The index of this object in the jobs array is ${JSON.stringify(target.value)}`);
}

const JobItem = (job, key) => {
  return (
    <IonItem key={key} onClick={handleClick}>
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