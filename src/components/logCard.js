import React from 'react' 
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card } from 'react-bootstrap'
import Tags from "./tags"

const logCard =({title, path, date, tags}) => {
    return(
        <Container>
        <Card>
            ttt
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{date}</Card.Subtitle>
                <Link to={path}>Read more</Link>
            </Card.Body>
            <Tags>{tags}</Tags>
        </Card>
        </Container>
    )
}
export default logCard

