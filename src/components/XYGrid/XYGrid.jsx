import './xyGrid.scss';

import {
  XYPlot,
  XAxis,
  YAxis,
  LineMarkSeries,
  HorizontalGridLines,
} from 'react-vis';

const Stats = ({data}) => {
  return (
    <XYPlot width={600} height={400} margin={{left: 60, right: 10, top: 10, bottom: 40}}  xType="ordinal">
      <HorizontalGridLines />
      <LineMarkSeries data={data} curve="curveMonotoneX" />
      <XAxis />
      <YAxis />
    </XYPlot>
  );
};

export default Stats;
