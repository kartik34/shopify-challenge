import React from 'react';
import axios from "axios";
import './App.css';
import 'bulma/css/bulma.min.css';
import { Heading, Box, Image, Button, Columns, Container } from 'react-bulma-components';
import Post from './Post';
import Status from './Status';
import Form from './DateForm';
function App() {
  const [pics, setPics] = React.useState<[any]>();
  const [isLoading, setIsLoading] = React.useState(false);

  const baseURL = "https://api.nasa.gov/planetary/apod?api_key=";
  const API_KEY = "tsYWeoBWdUuvkp8MCax5tDxqnWB3ArxznEgT6ZWq";

  const getPictures = (date1: Date, date2: Date) => {
    setIsLoading(true);
    axios.get(`${baseURL}${API_KEY}&start_date=${formatYmd(date1)}&end_date=${formatYmd(date2)}`).then((response) => {
      setPics(response.data);
      setIsLoading(false);
      console.log(response.data);
    });
  }
  const formatYmd = (date: Date) => date.toISOString().slice(0, 10);
  React.useEffect(() => {
    let date1 = new Date();
    let date2 = new Date();
    date1.setMonth(date1.getMonth() - 1);
    getPictures(date1, date2);
  }, []);
  if (!pics || isLoading) {
    return (
      <Container id="spinner" >
        <Status />
      </Container>
    );
  }
  return (
    <div className="App">
      <Heading id="heading">NASA Astronomy Picture of the Day Viewer</Heading>
      <Columns id="form">
        <Columns.Column offset={4} size={4}>
          <Form getPictures={getPictures} />
        </Columns.Column>
      </Columns>
      {pics.length < 1 ? (
        <Heading id="noData">
          No data for those dates :(
        </Heading>
      ) : (
        <Container breakpoint="fluid">
          <Columns multiline={true}>
            {pics.map(picture => (
              <Post title={picture.title} date={picture.date} imgURL={picture.url} explanation={picture.explanation} />
            ))}
          </Columns>
        </Container>
      )}
    </div >
  );
}

export default App;