import React from 'react'
import PillCard from '../../components/organisms/PillCard'

const index = () => {
  return (
    <div>
      Home Component
      <PillCard sectionTitle="약" pills={['소화제', '소염제', '위장약']} />
      <PillCard sectionTitle="영양제" pills={['종합비타민', '홍삼', '오메가3', '비타민B']} />
      <div>supplier component</div>
      <div>TimeLine component</div>
    </div>
  )
}

export default index
