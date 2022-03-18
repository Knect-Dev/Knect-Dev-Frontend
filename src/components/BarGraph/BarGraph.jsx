import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeriesCanvas,
} from 'react-vis';


// This can be modified to take in data like the XYGrid, or the XYGrid can be modified to work like this.
const blueData = [
  { x: 'Applied', y: 30 },
  { x: 'Phone Screen', y: 15 },
  { x: 'Tech Interview', y: 11 },
  { x: 'Onsite', y: 8 },
  { x: 'Offer', y: 4 },
];


const BarGraph = () => {
  return (
        <XYPlot xType='ordinal' width={600} height={400} >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeriesCanvas data={blueData} />
        </XYPlot>
  );
};

export default BarGraph;
