import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeriesCanvas,
} from 'react-vis';
import { useEffect } from 'react';
import { IonText } from '@ionic/react';

const BarGraph = ({jobData}) => {

  useEffect(() => {
    console.log(">>>>>>> JOB DATA >>>>>>>", jobData)
  }, [jobData])

  return (
    jobData.length > 0 ? 
        <XYPlot xType='ordinal' width={600} height={400} >
          <VerticalGridLines />
          <HorizontalGridLines/>
          <XAxis />
          <YAxis />
          <VerticalBarSeriesCanvas colorType="literal" data={jobData} />
        </XYPlot>
        :   
        <IonText> No Data </IonText>
  );
};

export default BarGraph;
