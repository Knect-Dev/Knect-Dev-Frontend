import { useSelector } from 'react-redux';

const JobsList = () => {
  let jobState = useSelector((state) => state.jobs.jobs);
  console.log('JOBSTATE: ', jobState);

  return (
    <ul>
      {jobState.map((job, key) => (
        <li key={key}>{job.title}</li>
      ))}
    </ul>
  );
};

export default JobsList;
