import './jobsList.scss';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonRow,
  IonGrid,
  IonCol,
} from '@ionic/react';
import JobItem from '../JobItems/JobItem';
import { useSelector } from 'react-redux';
import fuzzysort from 'fuzzysort';

const JobsList = () => {

  const jobState = useSelector(state => state.jobs.jobs);
  // get current search input from fuzzy search
  const searchState = useSelector(state => state.search);

  console.log('>>>>>>>>>>>>> jobState type: ', typeof jobState);
  console.log('jobState : ', jobState);
  console.log('>>>>>>>>>>>>> searchState type: ', typeof searchState);
  console.log('searchState : ', searchState);

  

  let fuzzyResults;
  fuzzyResults = fuzzysort.go(searchState.search, jobState, {
    keys: [
      'company',
      'title',
      'jobId',
      'appliedDate',
      'stage',
      // 'status', // TODO remove or change type to a string
      'location',
      'technologies',
      // 'offer', // TODO remove or change type to a string
      'notes'
    ]
  });

  console.log('fuzzyResults type: ', typeof fuzzyResults);

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
      <IonGrid>
          <IonRow>

            <IonCol size='.3'>
              <IonLabel></IonLabel>
            </IonCol>

            <IonCol size='2'>
              <IonLabel >Company</IonLabel>
            </IonCol>

            <IonCol size='2.5'>
              <IonLabel >Title</IonLabel>
            </IonCol>

            <IonCol size='1.5'>
              <IonLabel >Date Applied</IonLabel>
            </IonCol>

            <IonCol size='2'>
              <IonLabel > Location</IonLabel>
            </IonCol>

            <IonCol size='1'>
              <IonLabel>Status</IonLabel>
            </IonCol>

            <IonCol size='1.5'>
              <IonLabel>Stage</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
        
        {jobResults.map((job, idx) => {
          // console.log('Current job', job)
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
