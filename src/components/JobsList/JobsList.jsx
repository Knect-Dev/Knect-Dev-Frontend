import './jobsList.scss';
import {
  IonContent,
  IonList,
  IonItem
} from '@ionic/react';
import JobItem from '../JobItems/JobItem';
import { useSelector } from 'react-redux';
import fuzzysort from 'fuzzysort';

const JobsList = ({ jobs }) => {
  // let jobState = useSelector((state) => state.jobs.jobs); // This should replace the line below vvv
  let jobState = jobs; // TEMP placeholder data until redux initial state created 

  // get current search input from fuzzy search
  const searchState = useSelector(state => state.search);

  let fuzzyResults;
  fuzzyResults = fuzzysort.go(searchState.search, jobState, {
    keys: [
      'company',
      'title',
      'jobId',
      'appliedDate',
      'stage',
      'status',
      'location',
      'technologies',
      'offer',
      'notes',
    ]
  });

  // function handleClick(e) { // BUG more info: https://www.educative.io/edpresso/what-is-typeerror-converting-circular-structure-to-json
  //   let something = JSON.stringify(e.target);
  //   console.log(something);
  // };

  // renders fuzzy results if there is search input
  // otherwise renders all jobs from job state
  let jobResults;
  searchState.search ?
    jobResults = fuzzyResults :
    jobResults = jobState;

  console.log('jobResults', jobResults);


  /*onClick={handleClick}*/
  return (
    <IonContent>
      <IonList class="ion-margin"  >
        {jobResults.map((job, idx) => {
          console.log('Current job', job)
          return (
            // check if results are in fuzzy search result format - fuzzy search returns results nested in an additional object
            job.obj ?
              <JobItem job={job.obj} key={idx} />
              :
              <JobItem job={job} key={idx} />
          );
        })
        }
        {!jobResults.length ? <IonItem>NO JOBS MATCH THIS SEARCH</IonItem> : null}
      </IonList>
    </IonContent>
  );
};

export default JobsList;
