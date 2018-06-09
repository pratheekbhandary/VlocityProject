import React from "react";
import { Component } from "react";

import {Glyphicon} from 'react-bootstrap/lib';
import ListItem from './ListItem';

export default class PeopleList extends Component {

  render() {
      const {people,selectedPerson,changePerson}=this.props;
    return (
        <div>
        {people.map((person,index)=>{
            return <span key={index} onClick={()=>changePerson(index)}><ListItem text={person.name} isActive={index===selectedPerson} 
            /></span>
        })}
        </div>
    );
  }
}
