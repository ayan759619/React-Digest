import TabButton from "./TabButton";
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

// let tabContent = <h1>Please Select a topic</h1>;

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
  
  const [selectedExample, setSelectedExample] = useState();
  const handleSelect = (prop) => {

    setSelectedExample(prop);
    console.log(selectedExample);
  }
  // if (selectedExample) {
  //   tabContent = (
  //     <div id="tab-content">
  //     <h3>{EXAMPLES[selectedExample].title}</h3>
  //     <p>{EXAMPLES[selectedExample].description}</p>
  //       <pre>
  //       <code>{EXAMPLES[selectedExample].code}</code>
  //       </pre>
  //     </div>
  //   );
  // }

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

        <TabButton onSelect={()=>handleSelect('components')} isSelected={selectedExample==="components"}> Components</TabButton>
        <TabButton onSelect={()=>handleSelect('jsx')} isSelected={selectedExample==="jsx"}> JSX</TabButton>
        <TabButton onSelect={()=>handleSelect('props')} isSelected={selectedExample==="props"}> Prop</TabButton>
        <TabButton onSelect={()=>handleSelect('state')} isSelected={selectedExample==="state"}> State</TabButton>
        
        </menu>
        {/* {selectedExample} */}
        
        {!selectedExample ? <h1>Please Select a topic</h1>:<div id="tab-content"><h3>{EXAMPLES[selectedExample].title}</h3>
        <p>
        {EXAMPLES[selectedExample].description}
        </p>
        <pre>
        <code>
        {EXAMPLES[selectedExample].code}
        </code>
        </pre>
        </div>}
        {/* {tabContent} */}
        </section>
      </main>
    </div>
    
  );
  
}


export default App;
