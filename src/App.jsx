import { useEffect } from 'react';
import { useState } from 'react';
import Jobs from './Jobs';
import Tabs from './Tabs';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [people, setPeople] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPeople(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <main className="app-comp">
      <Tabs
        people={people}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <Jobs people={people} currentIndex={currentIndex} />
    </main>
  );
};
export default App;
