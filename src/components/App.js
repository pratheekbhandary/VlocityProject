import React from "react";
import { Component } from "react";

import PageHeader from './PageHeader';
import ControlledCarousel from './ControlledCarousel';
import PeopleList from './PeopleList';
import {Grid, Row, Col} from 'react-bootstrap/lib';
import people from '../people_(5)';



export default class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.changePerson = this.changePerson.bind(this);
        this.searchFieldChange = this.searchFieldChange.bind(this);

        this.state = {
          selectedPerson: 0,
          searchText:'',
          searchedPeople:people
        };
      }

      searchFieldChange(e){
          debugger;
        this.setState({searchText:e.target.value});
        let searchedPeople=people.filter((person)=>{
            return person.name.toLowerCase().indexOf(e.target.value.toLowerCase())!==-1;
        });
        this.setState({searchedPeople,selectedPerson:0});
      }

      changePerson(i){
          this.setState({selectedPerson:i})
      }



  render() {
    return (
        <div>
            <PageHeader searchFieldChange={this.searchFieldChange} searchText={this.state.searchText}/>
            <Grid>
                <Row className="show-grid">
                    <Col md={4}>
                            <PeopleList people={this.state.searchedPeople} changePerson={this.changePerson} 
                        selectedPerson={this.state.selectedPerson}/>
                    </Col>
                    <Col md={8}>
                        <ControlledCarousel people={this.state.searchedPeople} changePerson={this.changePerson} 
                        selectedPerson={this.state.selectedPerson}/>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}
