import React from 'react'
import styled from 'styled-components'
import PillCard from '../../components/organisms/PillCard'
import Timeline from '../../components/organisms/Timeline'

// pills는 db에서 받아오는 것

const Home = () => {
  return (
    <Container>
      <PillCard
        sectionTitle="약"
        pills={['소화제', '소염제', '위장약']}
        button={true}
        withTag={false}
      />
      <PillCard
        sectionTitle="영양제"
        pills={['종합비타민', '홍삼', '오메가3', '비타민B']}
        button={true}
        withTag={false}
      />
      <Timeline />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 300px 550px;
  grid-gap: 10px;
`

export default Home
