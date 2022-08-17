import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetail';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
        };
    }

    onDishSelected(dishId) {
        this.setState({ selectedDish: dishId });
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelected(dish.id)}>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelected(dish.id)}>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">{menu}</div>
                {/* <div className="row">{this.renderDish(this.state.selectedDish)}</div> */}
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === this.state.selectedDish)} />
            </div>
        );
    }
}

export default Menu;
