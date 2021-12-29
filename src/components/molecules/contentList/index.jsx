import React from 'react'
import PropTypes from 'prop-types'
import Content from '../../atoms/Content'

const ContentList = ({ lists }) => {
  return (
    <div>
      {lists.map((list) => (
        <Content key={list} text={list} underline={true} />
      ))}
    </div>
  )
}

ContentList.propTypes = {
  lists: PropTypes.array.isRequired,
}

export default ContentList
