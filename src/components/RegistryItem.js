import React from 'react';
import { Card } from 'react-bootstrap';

const RegistryItem = (href, image) => {
    return(
        <div>
            <a href={href}>
            <Card style={{ width: '18rem', border: none }}>
                <Card.Img variant="top" src={image} />
            </Card>
            </a>
        </div>
    )


}

export default RegistryItem;

