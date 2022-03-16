import './jobsList.scss';
import {
  IonChip,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList
} from '@ionic/react';
import { useSelector } from 'react-redux';
import JobItem from '../JobItems/JobItem';


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
