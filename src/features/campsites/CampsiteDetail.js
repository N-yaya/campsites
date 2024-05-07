import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const CampsiteDetail = ({campsite}) =>{
    const {image, name, description}= campsite;
    return(
        <Col md='5' className='m-1'>
             <Card>
                <CardBody>
                    <CardImg Top src={image} alt={name} />
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}

export default CampsiteDetail;