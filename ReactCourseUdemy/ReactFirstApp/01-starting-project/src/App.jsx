import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept title="Component" description="The core UI building block" image={componentsImg}/>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
            <CoreConcept title="Component" description="The core UI building block" image={componentsImg}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
