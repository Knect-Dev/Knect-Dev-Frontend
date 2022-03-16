import './jobsList.scss';
import {
  IonContent,
  IonList
} from '@ionic/react';
import { useSelector } from 'react-redux';
import JobItem from '../JobItems/JobItem';

const JobsList = () => {
  let jobState = useSelector((state) => state.jobs.jobs);
  // console.log('JOBSTATE: ', jobState);

  function handleClick(e) { // BUG more info: https://www.educative.io/edpresso/what-is-typeerror-converting-circular-structure-to-json
    let something = JSON.stringify(e.target);
    console.log(something);
  };


  return (
    <IonContent>
      <IonList class="ion-margin" onClick={handleClick}>
        {jobState.map((job, idx) => <JobItem job={job} key={idx} />)}
      </IonList>
    </IonContent>
  );
};

export default JobsList;
