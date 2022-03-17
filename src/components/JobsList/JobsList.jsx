import './jobsList.scss';
import {
  IonContent,
  IonList
} from '@ionic/react';
import JobItem from '../JobItems/JobItem';
import { useSelector } from 'react-redux';
import fuzzysort from 'fuzzysort';

const JobsList = ({ jobs }) => {
  // let jobState = useSelector((state) => state.jobs.jobs); // This should replace the line below vvv
  let jobState = jobs; // TEMP placeholder data until redux initial state created 
  // console.log('JOBSTATE: ', jobState);

  // get current search input from fuzzy search
  // console.log('jobState', jobState);
  const searchState = useSelector(state => state.search);
  // fuzzysort
  console.log('searchState Jobs', searchState);
  let results;
  if (searchState.length > 0) {
    let promise = fuzzysort.goAsync(searchState, jobState, { key: ['company'] })
    promise.then(results => console.log('fuzzy results', results));
  }
  console.log('results', results);


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
