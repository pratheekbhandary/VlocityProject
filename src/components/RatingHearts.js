import React from "react";
import { Component } from "react";

import {Glyphicon} from 'react-bootstrap/lib';

export default class RatingHearts extends Component {

    getHeart(count){
        let stars=[];
        for (var i = 0; i < count; i++) {
            stars.push(<Glyphicon glyph="glyphicon glyphicon-heart" />);
        }
        return stars;
    }

  render() {
    return (
        <div>
        {this.getHeart(this.props.rating)}
        </div>
    );
  }
}
