import React from "react";
import { Component } from "react";

import PageHeader from './PageHeader';
import ControlledCarousel from './ControlledCarousel';
import {Grid, Row, Col} from 'react-bootstrap/lib';
import people from '../people_(5)';



export default class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.changePerson = this.changePerson.bind(this);
        this.state = {
          selectedPerson: 0
        };
      }

      changePerson(i){
          this.setState({selectedPerson:i})
      }

  render() {
    return (
        <div>
            <PageHeader/>
            <Grid>
                <Row className="show-grid">
                    <Col md={4}>
                            {'  '}
                    </Col>
                    <Col md={8}>
                        <ControlledCarousel people={people} changePerson={this.changePerson} 
                        selectedPerson={this.state.selectedPerson}/>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}
