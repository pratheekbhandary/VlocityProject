import React from "react";
import { Component } from "react";

export default class ListItem extends Component {

  render() {
    const { text, isActive} =this.props;
    return (
        <div>
            <a className={`list-group-item ${isActive?'active':''}`}>
                <h3 className="list-group-item-heading">{text}</h3>
            </a>
        </div>
    );
  }
}
