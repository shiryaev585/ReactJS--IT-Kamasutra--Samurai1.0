import React from 'react'
import classes from './Arrows.module.scss'

const LeftArrow = (props) => {
  return (
    <button className={classes.arrowBtn}>
      <i className="fas fa-angle-double-left"></i>
    </button>
  )
}

export default LeftArrow
