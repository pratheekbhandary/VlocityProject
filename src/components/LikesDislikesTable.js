import React from "react";
import { Component } from "react";

import {Table} from 'react-bootstrap/lib';

const TableRow = ({index, like, dislike}) => (
    <tr>
    <td>{index+1}</td>
    <td>{like}</td>
    <td>{dislike}</td>
    </tr>
   );

export default class LikesDislikesTable extends Component {

getTBody=(likes,dislikes)=>{
        const count=likes.length>dislikes.length?likes.length:dislikes.length;
        let tbody=[];
        for (var i = 0; i < count; i++) {
            tbody.push(<TableRow key={i} index={i} like={likes[i]} dislike={dislikes[i]}/>);
        }
        return tbody;
    }

  render() {
    debugger;
    const {likes,dislikes}=this.props;
    return (
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Likes</th>
            <th>Dislikes</th>
          </tr>
        </thead>
        <tbody>
            {this.getTBody(likes,dislikes)}
        </tbody>
      </Table>
    );
  }
}
