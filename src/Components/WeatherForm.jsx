import React from 'react';
import { useState } from 'react';
import { Card, Form } from 'react-bootstrap';

function WeatherForm() {
  const [stateName, setStateName] = useState('');

  return (
    <div className='centered'>
      <Card style={{ width: '25rem', backgroundColor: '#466193'}} className='centered'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{color: 'white'}}>Enter City Name <i class="fa-solid fa-city" style={{color: 'black'}}></i> </Form.Label>
            <Form.Control type="text" placeholder="Enter City Name"/>
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
}

export default WeatherForm;
