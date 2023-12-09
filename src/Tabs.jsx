const Tabs = ({ people, currentIndex, setCurrentIndex }) => {
  return (
    <section className="tabs-comp">
      {people.map((person, index) => {
        return (
          <button
            onClick={() => {
              setCurrentIndex(index);
            }}
            className={
              currentIndex === index ? 'button active-button' : 'button'
            }
            type="button"
            key={person.id}
          >
            {person.company}
          </button>
        );
      })}
    </section>
  );
};
export default Tabs;
