import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

const Duties = ({ duties }) => {
  return (
    <section className="duties-comp">
      {duties.map((duty) => {
        const id = uuidv4();
        return (
          <div key={id} className="duty">
            <div className="icon-container">
              <MdKeyboardDoubleArrowRight />
            </div>
            <p>{duty}</p>
          </div>
        );
      })}
    </section>
  );
};
export default Duties;
