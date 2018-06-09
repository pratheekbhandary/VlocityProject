import React from "react";
import { Component } from "react";

import LikesDislikesTable from './LikesDislikesTable';
import {Carousel} from 'react-bootstrap/lib';

export default class Person extends Component {

  render() {
    debugger;
    const {name,rating,img,Description,Likes,Dislikes}=this.props.person;
    return (
      <Carousel.Item key={this.props.key}>
      <img width={900} height={900} alt="900x900" src={img} />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      <LikesDislikesTable likes={Likes} dislikes={Dislikes}/>
    </Carousel.Item>
    );
  }
}
