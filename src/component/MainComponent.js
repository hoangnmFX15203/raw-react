import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from '~/component/MenuComponent';
import React, { Component } from 'react';
import { DISHES } from './shared/dishes';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null,
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu onClick={(dishId) => this.onDishSelect(dishId)} dishes={this.state.dishes} />
            </div>
        );
    }
}

export default Main;