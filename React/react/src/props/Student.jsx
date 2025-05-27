import React from 'react'
import PropTypes from 'prop-types'  // <-- Corrected import
import "./student.css"

// the parent component is App.jsx
export const Student = (props) => {
  return (
    <div>
      <p>{}</p>
      <table className='table1'>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{props.age}</td>
          </tr>
          <tr>
            <th>Married</th>
            <td>{props.married ? "Yes married" : "No not married"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  married: PropTypes.bool
}

Student.defaultProps = {
  age: 18
}
