import React, { Component } from 'react'
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationListComponent/LocationList';
import { Paper, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ForecastExtended from './components/ForecastExtended/ForecastExtended';

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

  constructor() {
    super();
    this.state = {
      city: null
    };
  }

  handleSelectedLocation = city => this.setState({city});

  render = () => {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h3" className="title">
                  Weather APP!
                </Typography>
              </Toolbar>
            </AppBar>
          </Col> 
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={8}>
              <div className="detail">
                { city && <ForecastExtended city={city}></ForecastExtended> }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;