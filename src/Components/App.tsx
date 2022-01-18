import React from 'react';
import axios from "axios";
import './App.css';
import 'bulma/css/bulma.min.css';
import { Heading } from 'react-bulma-components';
import Post from './Post';
import Status from './Status';

function App() {
  const [pics, setPics] = React.useState<[any]>();
  const baseURL = "https://api.nasa.gov/planetary/apod?api_key=";
  const photoCount = 15;

  const getPictures = () => {

    axios.get(`${baseURL}${API_KEY}&count=${photoCount}`).then((response) => {
      setPics(response.data);
    });
  }
  React.useEffect(() => {
    getPictures();
  }, []);

  if (!pics) {
    return (
      <Status />
    );
  }

  return (
    <div className="App">
      {pics.map(item => (
        <Post />
      ))}
    </div>
  );
}

export default App;