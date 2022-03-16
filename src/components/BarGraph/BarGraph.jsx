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
  { x: 'A', y: 12 },
  { x: 'B', y: 2 },
  { x: 'C', y: 11 },
];
const greenData = [
  { x: 'A', y: 10 },
  { x: 'B', y: 5 },
  { x: 'C', y: 15 },
];
const redData = [
  { x: 'A', y: 4 },
  { x: 'B', y: 7 },
  { x: 'C', y: 8 },
];

const BarGraph = () => {
  return (
        <XYPlot xType='ordinal' width={300} height={300} xDistance={100} >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeriesCanvas data={blueData} />
          <VerticalBarSeriesCanvas data={greenData} />
          <VerticalBarSeriesCanvas data={redData} />
        </XYPlot>
  );
};

export default BarGraph;
