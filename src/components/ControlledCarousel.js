import React from "react";
import { Component } from "react";

import {Carousel} from 'react-bootstrap/lib';
import Person from './Person';
import LikesDislikesTable from './LikesDislikesTable';

export default class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        direction: null
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.props.changePerson(selectedIndex);
      this.setState({
        direction: e.direction
      });
    }

    getPerson=(people)=>{
      let tbody=[];
      tbody=people.map((person,index)=>{
        return <Carousel.Item key={index}>
        <Person person={person}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      });
      return tbody;
    }

    render() {
      const { direction } = this.state;
  
      return (
        <Carousel
          activeIndex={this.props.selectedPerson}
          direction={direction}
          onSelect={this.handleSelect}
        >
         {this.getPerson(this.props.people)}
        </Carousel>
      );
    }
  }