import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Button from '../../components/atoms/Button'
import TitleText from '../../components/atoms/TitleText'
import Modal from '../../components/organisms/Modal'
import PillCard from '../../components/organisms/PillCard'
import { openModal } from '../../redux'

const PillSetting = () => {
  const pillsState = useSelector((state) => state.pills)
  const dispatch = useDispatch()
  const pills = pillsState.pills
  console.log(pills)
  const shouldOpenModal = pillsState.isModalOpen

  const handlePlusBtnClick = () => {
    console.log('button clicked')
    dispatch(openModal())
  }

  return (
    <>
      <PillContainer>
        <TitleText title="약 / 영양제 리스트" />
        {pills.map((pill) => (
          <PillCard key={pill.id} pill={pill} />
        ))}
        <Button label="+" float={true} onClick={handlePlusBtnClick} />
      </PillContainer>
      {shouldOpenModal && <Modal />}
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
