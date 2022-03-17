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
  let fuzzyResults;


  typeof searchState === 'object' ?
    fuzzyResults = fuzzysort.go(searchState.search, jobState, { key: ['company'] })
    :
    fuzzyResults = fuzzysort.go(searchState, jobState, { key: ['company'] })
  console.log('fuzzy search', fuzzyResults);
  // promise.then(results => console.log('fuzzy results', results));
  // }


  // function handleClick(e) { // BUG more info: https://www.educative.io/edpresso/what-is-typeerror-converting-circular-structure-to-json
  //   let something = JSON.stringify(e.target);
  //   console.log(something);
  // };
  console.log('jobState', jobState);

  /*onClick={handleClick}*/
  return (
    <IonContent>
      <IonList class="ion-margin"  >
        {fuzzyResults.map((job, idx) => {
          console.log('Current job', job)
          return (
            <JobItem job={job.obj} key={idx} />
          );
        })
        }
      </IonList>
    </IonContent>
  );
};

export default JobsList;
