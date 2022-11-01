// can be renamed to .jsx, but webpack will read .js files as .jsx
// webpack allows you to import not just .js files
import './App.css';
import Title from "./title.js"

// curly brakets are for inserting javascript into HTMl template
function App() {
  return (
    <div className="App">
      <Title name="Peter" />
      <Title name="Not Peter" />
    </div>
  );
}

export default App;
