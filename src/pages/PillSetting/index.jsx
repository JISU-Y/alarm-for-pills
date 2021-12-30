import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/atoms/Button'
import TitleText from '../../components/atoms/TitleText'
import Modal from '../../components/organisms/Modal'
import PillCard from '../../components/organisms/PillCard'

const PillSetting = () => {
  const [shouldOpenModal, setShouldOpenModal] = useState(false)

  const openModal = () => {
    setShouldOpenModal(true)
  }
  const closeModal = () => {
    setShouldOpenModal(false)
  }

  return (
    <>
      <PillContainer>
        <TitleText title="약/영양제를 추가해보세요." />
        <PillCard
          sectionTitle="약"
          pills={['소화제', '소염제', '위장약']}
          button={false}
          withTag={true}
        />
        <PillCard
          sectionTitle="영양제"
          pills={['종합비타민', '홍삼', '오메가3', '비타민B']}
          button={false}
          withTag={true}
        />
        <Button label="+" float={true} onClick={openModal} />
      </PillContainer>
      {shouldOpenModal && <Modal closeModal={closeModal} />}
    </>
  )
}

const PillContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`

export default PillSetting
