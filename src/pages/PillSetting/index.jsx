import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Button from '../../components/atoms/Button'
import TitleText from '../../components/atoms/TitleText'
import Modal from '../../components/organisms/Modal'
import PillCard from '../../components/organisms/PillCard'

const PillSetting = () => {
  const [shouldOpenModal, setShouldOpenModal] = useState(false)
  const pills = [
    {
      type: '약',
      name: '소염제',
      freq: '하루에 n번',
      freqDetail: '1',
      many: 1,
      time: '20:00',
      left: 20,
    },
    {
      type: '영양제',
      name: '종합 비타민',
      freq: '하루에 n번',
      freqDetail: '2',
      many: 1,
      time: '20:00',
      left: 200,
    },
    {
      type: '영양제',
      name: '오메가 3',
      freq: '하루에 n번',
      freqDetail: '1',
      many: 1,
      time: '19:00',
      left: 50,
    },
  ]

  const openModal = () => {
    setShouldOpenModal(true)
  }
  const closeModal = () => {
    setShouldOpenModal(false)
  }

  return (
    <>
      <PillContainer>
        <TitleText title="약 / 영양제 리스트" />
        {pills.map((pill) => (
          <PillCard key={pill.name} pill={pill} />
        ))}
        {/* <PillCard sectionTitle="약" pills={drugs} button={false} withTag={true} />
        <PillCard sectionTitle="영양제" pills={supps} button={false} withTag={true} /> */}
        <Button label="+" float={true} onClick={openModal} />
      </PillContainer>
      {shouldOpenModal && <Modal closeModal={closeModal} />}
    </>
  )
}

const PillContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`

export default PillSetting
