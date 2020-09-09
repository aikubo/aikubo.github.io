import React from "react"
import {Card} from "react-bootstrap"
const tagbar =() => (
    <div>
        <Card>
            <Card.Body>
                <Card.Title className= "text-center text-uppercase mb-3">    
                    Tags
                </Card.Title>
                <ul>
                    {group.map(tag => (
                    <li key={tag.fieldValue}>
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                        {tag.fieldValue} ({tag.totalCount})
                        </Link>
                    </li>
                    ))}
                </ul>
            </Card.Body>

        </Card>

    </div>

)
export default tagbar