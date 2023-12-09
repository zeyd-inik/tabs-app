import Duties from './Duties';

const Jobs = ({ people, currentIndex }) => {
  const { id, order, title, dates, duties, company } = people[currentIndex];

  return (
    <article className="jobs-comp">
      <h3>{title}</h3>
      <span>{company}</span>
      <p className="dates">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default Jobs;
