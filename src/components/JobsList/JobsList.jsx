import './jobsList.scss';

import {
  IonContent,
  IonItem,
  IonLabel,
  IonList} from '@ionic/react';
import { useState } from 'react';

const JobsList = ({jobs}) => {
 
  return (
    <IonContent>
      <IonList class="ion-margin-">
        {jobs.map((job, index) => {
          return (
            <IonItem class="ion-justify-content-center ion-margin-bottom" key={index}>
              <IonLabel>{job}</IonLabel>
            </IonItem>
          )
        })}
      </IonList>
    </IonContent>
  );
};

export default JobsList;

const jobSchema = (sequelize, DataTypes) => sequelize.define('Jobs', {
  company: { type: DataTypes.STRING, required: true },
  title: { type: DataTypes.STRING, required: true },
  location: { type: DataTypes.STRING, defaltValue: '', required: false },
  appliedDate: { type: DataTypes.DATE, defaltValue: null, required: false },
  applied: { type: DataTypes.BOOLEAN, defaltValue: false, required: false },
  technologies: { type: DataTypes.ARRAY(DataTypes.STRING), required: false },
  openPositions: { type: DataTypes.INTEGER, defaultValue: null, required: false },
  interview: { type: DataTypes.BOOLEAN, defaultValue: false, required: false },
  contacts: { type: DataTypes.STRING, defaultValue: '', required: false },
  notes: { type: DataTypes.STRING, defaultValue: '', required: false },
});