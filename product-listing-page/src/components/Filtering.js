import React from 'react';
import { Form } from 'react-bootstrap';

const Filtering = () => {
  return (
    <div className="filtering">
      <h5>Filter by:</h5>
      <Form>
        <Form.Group>
          <Form.Check type="checkbox" label="Red" />
          <Form.Check type="checkbox" label="Blue" />
          <Form.Check type="checkbox" label="Green" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Filtering;
