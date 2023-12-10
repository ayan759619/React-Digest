import { CORE_CONCEPTS } from "./data";
const CoreConcepts = (concept) => {
  return (
    <li>
      <img src={concept.image} alt={concept.title} />
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </li>
  );
};
const setSelectedExample = () => {

};

function App() {
  return (
    <div>
      <header>
      
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
      <section id="core-concepts">
      <ul>
      {CORE_CONCEPTS.map((concept) => ( <CoreConcepts {...concept} /> ))}
      <CoreConcepts {...CORE_CONCEPTS[0]} />
      <CoreConcepts {...CORE_CONCEPTS[1]} />
      <CoreConcepts {...CORE_CONCEPTS[2]} />
      <CoreConcepts {...CORE_CONCEPTS[3]} />
      </ul>
      </section>
        <h2>Time to get started!</h2>
        <section id="examples">
        <menu>
        <TabButton onSelect={() => setSelectedExample('counter')}>Components</TabButton>
        </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
