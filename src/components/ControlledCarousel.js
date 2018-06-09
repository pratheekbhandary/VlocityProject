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
        index: 0,
        direction: null
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }

    getPerson=(people)=>{
      let tbody=[];
      tbody=people.map((person,index)=>{
        const {name,rating,img,Description,Likes,Dislikes}=person;
        return <Carousel.Item key={index}>
        <div width={900} height={900}>
        <img width={200} height={200} alt="900x900" src={img} />
        </div>
        <LikesDislikesTable likes={Likes} dislikes={Dislikes}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      });
      return tbody;
    }

    render() {
      const { index, direction } = this.state;
  
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