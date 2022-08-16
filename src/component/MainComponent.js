import Menu from '~/component/MenuComponent';
import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
                <Header />
                <Menu onClick={(dishId) => this.onDishSelect(dishId)} dishes={this.state.dishes} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)} />
                <Footer />
            </div>
        );
    }
}

export default Main;
