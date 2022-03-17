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

const JobsList = ({ showForm, setShowForm, selectedJob, setSelectedJob }) => {

  const jobState = useSelector(state => state.jobs.jobs);
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
      // 'status', // TODO remove or change type to a string
      'location',
      'technologies',
      // 'offer', // TODO remove or change type to a string
      'notes'
    ]
  });

  // console.log('fuzzyResults type: ', typeof fuzzyResults);

  // function handleClick(e) { // BUG more info: https://www.educative.io/edpresso/what-is-typeerror-converting-circular-structure-to-json
  //   let something = JSON.stringify(e.target);
  //   console.log(something);
  // };

  // render fuzzy results if there is search input OR all jobs
  let jobResults;
  searchState.search ?
    jobResults = fuzzyResults :
    jobResults = jobState;

  // console.log('jobResults', jobResults);

  /*onClick={handleClick}*/
  return (
    <IonContent>

      <IonList class="ion-margin">
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
              <IonLabel >Applied</IonLabel>
            </IonCol>

            <IonCol size='2'>
              <IonLabel > Location</IonLabel>
            </IonCol>

            <IonCol size='1.25'>
              <IonLabel>Status</IonLabel>
            </IonCol>

            <IonCol size='1.5'>
              <IonLabel>Stage</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>

        {
          jobResults.map((job, idx) => {
            // fuzzy search returns results nested in an additional object
            return (
              job.obj ?
                <JobItem job={job.obj} key={idx} showForm={showForm} setShowForm={setShowForm} selectedJob={selectedJob} setSelectedJob={setSelectedJob} /> :
                <JobItem job={job} key={idx} showForm={showForm} setShowForm={setShowForm} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
            );
          })
        }

        {
          !jobResults.length ?
            <IonItem>NO JOBS MATCH THIS SEARCH</IonItem>
            : null
        }
      </IonList>
    </IonContent>
  );
};

export default JobsList;
