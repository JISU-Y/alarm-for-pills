import React from 'react'

import PropTypes from 'prop-types'

const NavIcon = ({ navIcon }) => {
  return <div>{navIcon}</div>
}

NavIcon.propTypes = {
  navIcon: PropTypes.string.isRequired,
}

export default NavIcon
