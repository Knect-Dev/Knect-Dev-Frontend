import './xyGrid.scss';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from 'react-vis';

const Stats = ({data}) => {
  return (
    <XYPlot width={300} height={300}>
      <HorizontalGridLines />
      <LineSeries
        data={data}
      />
      <XAxis />
      <YAxis />
    </XYPlot>
  );
};

export default Stats;
