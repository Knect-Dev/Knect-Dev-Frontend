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
  { x: 'Applied', y: 30, color: '#32a852' },
  { x: 'Phone Screen', y: 15, color: '#3261a8' },
  { x: 'Tech Interview', y: 11, color: '#a89c32' },
  { x: 'Onsite', y: 8, color: '#6332a8' },
  { x: 'Offer', y: 4, color: '#a83e32' },
];


const BarGraph = () => {
  return (
        <XYPlot xType='ordinal' width={600} height={400} >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeriesCanvas colorType="literal" data={blueData} />
        </XYPlot>
  );
};

export default BarGraph;
