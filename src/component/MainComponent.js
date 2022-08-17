import Menu from '~/component/MenuComponent';
import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Route, Routes } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            // selectedDish: null,
        };
    }

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }

    render() {
        const Homepage = () => {
            return <Home />;
        };
        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={<Homepage />} />
                    <Route exact path="/menu" element={<Menu dishes={this.state.dishes} />} />
                </Routes>
                {/* <Redirect to="/home" /> */}

                {/* <Menu onClick={(dishId) => this.onDishSelect(dishId)} dishes={this.state.dishes} /> */}
                {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)} /> */}
                <Footer />
            </div>
        );
    }
}

export default Main;
