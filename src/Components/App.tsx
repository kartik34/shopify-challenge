import React from 'react';
import axios from "axios";
import './App.css';
import 'bulma/css/bulma.min.css';
import { Heading, Box, Image, Button, Columns, Container } from 'react-bulma-components';
import Post from './Post';
import Status from './Status';

function App() {
  const [pics, setPics] = React.useState<[any]>();
  const baseURL = "https://api.nasa.gov/planetary/apod?api_key=";
  const photoCount = 15;
  const API_KEY = "eihhCSUZuLyb94zt3OSbF5109f6onykbIoNYD1fm";
  const getPictures = () => {

    axios.get(`${baseURL}${API_KEY}&count=${photoCount}`).then((response) => {
      setPics(response.data);
      console.log(response.data);
    });
  }
  React.useEffect(() => {
    getPictures();
  }, []);

  const likedFunc = () => {

  }

  if (!pics) {
    return (
      <Container id="spinner" >
        <Status />
      </Container>
    );
  }

  return (
    <div className="App">
      <Heading id="heading">NASA Picture of the Day Viewer   <Button color="success" renderAs="span">View Liked</Button></Heading>
      <Container breakpoint="fluid">
        <Columns multiline={true}>
          {pics.map(picture => (
            <Post title={picture.title} date={picture.date} imgURL={picture.url} likedFunc={likedFunc} explanation={picture.explanation} />
          ))}
        </Columns>
      </Container>
    </div >
  );
}

export default App;