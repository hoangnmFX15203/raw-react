import { DISHES } from '../shared/dishes';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { useState, useEffect, useParam } from 'react';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt="" />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments }) {
    if (comments !== null) {
        console.log(comments);
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>{comment.author}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

function DishDetail(props) {
    if (props.dish !== null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    else return <div></div>;
    // const [dishes, setDishes] = useState([]);

    // useEffect(() => {
    //     setDishes(props.dish);
    // }, [props]);

    // return (
    // <>
    //     {dishes.map((dish) => {
    //         return (
    //             <div className="container col-12 col-md-5 m-1">

    {
        /* <Card>
                            <CardImg width="100px" object src={dish.image} alt={dish.name} />
                            <div className="dish-details">
                                <p>{dish.name}</p>
                                <p>{dish.description}</p>
                                <p>{dish.price}</p>
                            </div>
                        </Card> */
    }
    //             </div>
    //         );
    //     })}
    // </>
    // );
}

export default DishDetail;
