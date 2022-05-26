import React from 'react'
import { PropTypes } from 'prop-types';
import { faker } from '@faker-js/faker'
const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <button onClick={onIncrementAsync}>
      Increment *2
    </button>
    {' '}
    <button onClick={onIncrement}>
      Increment +1
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
    <div>Your lucky name:{faker.name.findName()}</div>
  </div>


Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
}

export default Counter
