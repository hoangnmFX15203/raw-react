import { DISHES } from '../shared/dishes';
import { Card, CardImg } from 'reactstrap';
import { useState, useEffect } from 'react';

function DishDetail(props) {
    const [dishes, setDishes] = useState([]);
    console.log(dishes);

    useEffect(() => {
        setDishes(props.dish);
    }, [props]);

    return (
        <>
            {dishes.map((dish) => {
                return (
                    <div className="container">
                        <Card>
                            <CardImg width="100px" object src={dish.image} alt={dish.name} />
                        </Card>
                    </div>
                );
            })}
        </>
    );
}

export default DishDetail;
