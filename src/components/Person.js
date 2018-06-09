import React from "react";
import { Component } from "react";

import LikesDislikesTable from './LikesDislikesTable';
import RatingHearts from './RatingHearts';
import {Carousel, Grid, Row, Col, Media, Button} from 'react-bootstrap/lib';

export default class Person extends Component {

  render() {
    const {name,rating,img,Description,Likes,Dislikes}=this.props.person;
    return (
      <div><br/>
      <Grid bsClass="">
      <Row bsClass="" className="show-grid">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <Media>
                <Media.Left align="middle">
                  <img width={200} height={200} alt="200x200" src={img} />
                </Media.Left>
                <Media.Body align="middle">
                    <div>{name}</div>
                    <Button bsStyle="primary" bsSize="large"> SEND MESSAGE! </Button>
                    <RatingHearts rating={rating}/>
                </Media.Body>
              </Media>
              <br/>
                  <Row bsClass="" className="show-grid">
                    <Col bsClass="" md={4}>
                    </Col>
                  </Row>
                  <div className="panel panel-default">
                    <div className="panel-body">
                    {Description}
                    </div>
                  </div>                    
                  <Row bsClass="" className="show-grid">
                    <Col bsClass="" md={6}>
                      <LikesDislikesTable likes={Likes} dislikes={Dislikes}/>
                    </Col>
                  </Row>
                  </div><div className="col-md-1"></div>
               </Row>
                </Grid>

      </div>
    );
  }
}
