import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'
import Dropdown from 'react-bootstrap/Dropdown';

function FavAnimals(props) {
  return (
    <Card className='card'>
      <Card.Img className='card-img' variant="top" src={props.img} />
      <Card.Body>
        <hr></hr> 
        <Card.Title className='card-name'>{props.name}</Card.Title>
        <hr></hr> 
        <Card.Text className='card-desc'>
          {props.desc}
        </Card.Text>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            More Info
          </Dropdown.Toggle>
          {/*NavBar dropdown menu*/}
          <Dropdown.Menu>
            <Dropdown.Item href="#/Origins">Origins</Dropdown.Item>
            <Dropdown.Item href="#/Facts">Facts</Dropdown.Item>
            <Dropdown.Item href="#/Trivias">Trivias</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
    </Card>
  );
}

FavAnimals.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
}

FavAnimals.defaultProps = {
  name: "Empty",
  desc: "Empty",
  img: "Empty",
}


export default FavAnimals;