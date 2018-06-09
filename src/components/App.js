import React from "react";
import { Component } from "react";

import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap/lib';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="#home">Brand</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                <FormGroup>
                    <FormControl type="text" placeholder="Search" />
                </FormGroup>{' '}
                <Button type="submit">Submit</Button>
                </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
