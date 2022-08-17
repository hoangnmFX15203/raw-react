import { DISHES } from '../shared/dishes';
import { Card, CardImg } from 'reactstrap';
import { useState, useEffect } from 'react';

function DishDetail(props) {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        setDishes(props.dish);
    }, [props]);

    return (
        <>
            {dishes.map((dish) => {
                return (
                    <div className="container col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100px" object src={dish.image} alt={dish.name} />
                            <div className="dish-details">
                                <p>{dish.name}</p>
                                <p>{dish.description}</p>
                                <p>{dish.price}</p>
                                <p>{dish.comment}</p>
                            </div>
                        </Card>
                    </div>
                );
            })}
        </>
    );
}

export default DishDetail;
