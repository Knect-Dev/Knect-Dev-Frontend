import './jobsList.scss';
import {
  IonChip,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList
} from '@ionic/react';
import { magnetOutline } from 'ionicons/icons';
import { useSelector } from 'react-redux';

export const JobItem = ( job, key ) => {
  return (
    <IonItem key={key} onClick={handleClick}>
      <IonIcon icon={magnetOutline} slot="start" />
      <IonLabel slot=''>{job.company}</IonLabel>
      <IonLabel slot=''>Some job info here</IonLabel>
      <IonLabel slot=''>Salary</IonLabel>
      <IonLabel slot=''>Status</IonLabel>
      <IonChip slot="end" >99</IonChip>
    </IonItem>
  );
}

function handleClick({ target }) {
  console.log(`The index of this object in the jobs array is ${JSON.stringify(target.value)}`);
}

const JobsList = ({jobs}) => {
  // let jobState = useSelector((state) => state.jobs.jobs);
  let jobState = jobs;
  console.log('JOBSTATE: ', jobState);
  return (
    <IonContent>
      <IonList class="ion-margin">
        {jobState.map((job, key) => <JobItem data={job} key={key} />)}
      </IonList>
    </IonContent>
  );
};

export default JobsList;
