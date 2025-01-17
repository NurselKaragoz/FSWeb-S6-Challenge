import axios from "axios";
import { response } from "msw";
import { useEffect, useState } from "react";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [isims, setIsims] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => setIsims(response.data));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {isims.map((data, index) => {
        // console.log(index, "-", data);

        return (
          <div key={index}>
            {index + 1} - {data.name}
          </div>
        );
      })}
    </div>
  );
};

export default App;
