import './jobsList.scss';
import {
  IonChip,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  // IonNote
} from '@ionic/react';
import { magnetOutline } from 'ionicons/icons';
// import { useState } from 'react';

function handleClick({target}) {
  console.log(`The index of this object in the jobs array is ${JSON.stringify(target.value)}`);
}

export const JobItem = ({ data, key }) => {
  return (
    <IonItem key={key} onClick={handleClick}>
      <IonIcon icon={magnetOutline} slot="start"/>
      <IonLabel slot=''>{data.company}</IonLabel>
      <IonLabel slot=''>Some job info here</IonLabel>
      <IonLabel slot=''>Salary</IonLabel>
      <IonLabel slot=''>Status</IonLabel>
      <IonChip slot="end" >99</IonChip>
    </IonItem>

  );
}

const JobsList = ({ jobs }) => { // TODO connect `jobs` to Redux state.jobs

  return (
    <IonContent>
      <IonList class="ion-margin">
        {jobs.map((job, index) => <JobItem data={job} key={index} />)}
      </IonList>
    </IonContent>
  );
};

export default JobsList;

// const jobSchema = (sequelize, DataTypes) => sequelize.define('Jobs', {
//   company: { type: DataTypes.STRING, required: true },
//   title: { type: DataTypes.STRING, required: true },
//   location: { type: DataTypes.STRING, defaltValue: '', required: false },
//   appliedDate: { type: DataTypes.DATE, defaltValue: null, required: false },
//   applied: { type: DataTypes.BOOLEAN, defaltValue: false, required: false },
//   technologies: { type: DataTypes.ARRAY(DataTypes.STRING), required: false },
//   openPositions: { type: DataTypes.INTEGER, defaultValue: null, required: false },
//   interview: { type: DataTypes.BOOLEAN, defaultValue: false, required: false },
//   contacts: { type: DataTypes.STRING, defaultValue: '', required: false },
//   notes: { type: DataTypes.STRING, defaultValue: '', required: false },
// });