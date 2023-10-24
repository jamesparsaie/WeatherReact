import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

function WeatherForm({ onFormSubmit }) {
  const [stateName, setStateName] = useState('');
  
  const handleInputChange = (e) => {
    setStateName(e.target.value);
  };

  const handleSubmit = (e) => {
    if(!stateName) {
      alert('Please enter a Zip code!')
    }
    e.preventDefault();
    // Call the parent component's callback function with the city name

    onFormSubmit(stateName);
  };

  return (
    <div className='centered'>
      <Card style={{ width: '25rem', backgroundColor: '#466193' }} className='centered'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'white' }}>
              Enter Zipcode <i className="fa-solid fa-city" style={{ color: 'darkgray', marginLeft: '10px' }}></i>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Zipcode..."
              value={stateName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button style={{ marginBottom: '10px' }} variant="outline-light" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default WeatherForm;
