import Menu from '~/component/MenuComponent';
import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Route, Routes, useParams } from 'react-router-dom';
import Contact from './ContactComponent';
import DishDetail from './DishDetail';
import About from './AboutComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS,
            // selectedDish: null,
        };
    }

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }

    render() {
        const Homepage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promo={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leaders={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        const DishWithId = ({ match }) => {
            const { dishId } = useParams();
            const commentList = this.state.comments.filter((comment) => comment.dishId === +dishId);
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === +dishId)[0]} comments={commentList} />
            );
        };

        const RenderAbout = () => {
            return <About leaders={this.state.leaders.filter((leader) => leader.featured === true)} />;
        };
        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={<Homepage />} />
                    <Route exact path="/menu" element={<Menu dishes={this.state.dishes} />} />
                    <Route path="/menu/:dishId" element={<DishWithId />} />
                    <Route exact path="/contactus" element={<Contact />} />
                    <Route path="/aboutus" element={<RenderAbout />} />
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
