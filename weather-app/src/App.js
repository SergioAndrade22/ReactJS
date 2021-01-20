import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Paper} from '@material-ui/core';
import MyAppBar from './components/shared/MyAppBar';
import LocationListContainer from './components/containers/LocationListContainer';
import ForecastExtendedContainer from './components/containers/ForecastExtendedContainer';
import './App.css';

const cities = [
  "Bahía Blanca, ar",
  "San Carlos de Bariloche, ar",
  "Buenos Aires, ar",
  "Córdoba, ar",
  "Seattle, us",
  "Madrid, es",
  "Tokyo, jp",
  "Moscow, ru",
];

class App extends Component {
  render = () => {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <MyAppBar/>
          </Col> 
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={8}>
              <ForecastExtendedContainer/>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;