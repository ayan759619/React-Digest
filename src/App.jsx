import TabButton from "./TabButton";
import { useState } from "react";
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


function App() {
  const [selectedExample, setSelectedExample] = useState('Select any Tab');
  const handleSelect = (prop) => {

    setSelectedExample(prop);
    console.log(selectedExample);
  }


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
      {CORE_CONCEPTS.map((concept) => ( <CoreConcepts key={concept.title} {...concept} /> ))}
   
      </ul>
      </section>
        <h2>Time to get started!</h2>
        <section id="examples">
        <menu>

        <TabButton onSelect={()=>handleSelect('components')}> Components</TabButton>
        <TabButton onSelect={()=>handleSelect('jsx')}> JSX</TabButton>
        <TabButton onSelect={()=>handleSelect('props')}> Prop</TabButton>
        <TabButton onSelect={()=>handleSelect('state')}> State</TabButton>
        
        </menu>
        {selectedExample}
        </section>
      </main>
    </div>
    
  );
  
}


export default App;
