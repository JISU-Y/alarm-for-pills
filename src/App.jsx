import React from 'react'
import Button from './components/atoms/Button'
import Content from './components/atoms/Content'

const App = () => {
  return (
    <div>
      <Button label="추가하기" />
      <Content text="소염제" underline={true} />
      <div>App Component(routing)</div>
      <div>Navbar Component</div>
    </div>
  )
}

export default App
