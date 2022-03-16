import './jobsList.scss';
import {
  IonContent,
  IonList
} from '@ionic/react';
import JobItem from '../JobItems/JobItem';

const JobsList = ({jobs}) => {
  // let jobState = useSelector((state) => state.jobs.jobs);
  let jobState = jobs; // TEMP placeholder data until redux initial state created 
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
