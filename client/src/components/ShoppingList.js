import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        items : [
            { id: uuid(), name: 'Eggs'},
            { id: uuid(), name: 'Milk'},
            { id: uuid(), name: 'Steak'},
            { id: uuid(), name: 'Water'},
        ]
    }

    render() {
        const{ items } = this.state;
        return(
            <Container>
                <Button
                    color = "dark"
                    style = {{marginBottom: '2rem'}}
                    onClick = {() => {
                        const name = prompt ('Enter Item');
                        if (name) {
                            this.setState(state =>({
                                item: [...state.item, {id: uuid(), name}]
                            }));
                        }
                    }}>
                    Add Item</Button>
                    
                    <ListGroup>
                        <TransitionGroup className = "shopping-list">
                            {item.map(({id,name }) =>  (
                                <CSSTransition key={id} timeout = {500} className="fade">
                                    <listGroupItem>
                                    <Button 
                                        className = "remove-btn"
                                        color = "danger"
                                        size="sm"
                                        onClick = {()=>}
                                    {name}
                                    </listGroupItem>
                                </CSSTransition>
                        ))}
                        </TransitionGroup>
                    </ListGroup>
        );
    }
}

export default ShoppingList;