import React from 'react'
import PropTypes from 'prop-types'

const Circle = props => {
    return <div className={`main-circle ${props.anim === "anim-x" ? "anim-x" : ""} ${props.isBlur ? "blur" : ""} ${props.size === "sm" ? "sm" : "lg"}`} />
}

Circle.propTypes = {
    size: PropTypes.string,
    anim: PropTypes.string,
    isBlur: PropTypes.bool,
}

export default Circle