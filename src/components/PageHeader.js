import React from "react";
import { Component } from "react";

import {Navbar, FormGroup, FormControl, Button, 
    Glyphicon, InputGroup, Nav, NavItem, Grid, Row, Col, img} from 'react-bootstrap/lib';

export default class PageHeader extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="#home"><strong>FaceGram</strong></a>
                </Navbar.Brand>
                <Navbar.Toggle />   
            </Navbar.Header>
            <Navbar.Collapse>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={4}>
                    <Navbar.Form>
                    <FormGroup>
                        <InputGroup>
                        <FormControl 
                        onChange={this.props.searchFieldChange}
                        placeholder='Search'
                        type="text"
                        value={this.props.searchText} />
                        <InputGroup.Addon>
                            <Glyphicon onClick={this.props.clearSearch} glyph="glyphicon glyphicon-remove-sign" />
                        </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>{' '}
                    </Navbar.Form>
                    </Col>
                    <Col xs={12} md={2}>{'    '}
                    </Col>
                    <Col xs={12} md={4}>
                            <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            {this.props.loggedInUser.name}
                        </NavItem>
                        <img width={50} height={50} alt="40x40" src={this.props.loggedInUser.img} />
                        </Nav>
                    </Col>
                </Row>
            </Grid>
                
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
