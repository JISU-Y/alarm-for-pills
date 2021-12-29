import React from 'react'
import PillCard from '../../components/organisms/PillCard'
import Timeline from '../../components/organisms/Timeline'

// pills는 db에서 받아오는 것

const Home = () => {
  return (
    <div>
      Home Component
      <PillCard sectionTitle="약" pills={['소화제', '소염제', '위장약']} button={true} />
      <PillCard
        sectionTitle="영양제"
        pills={['종합비타민', '홍삼', '오메가3', '비타민B']}
        button={true}
      />
      <Timeline />
    </div>
  )
}

export default Home
