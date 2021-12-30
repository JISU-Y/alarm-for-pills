import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import Textbox from '../../atoms/Textbox'
import TitleText from '../../atoms/TitleText'

const Modal = ({ closeModal }) => {
  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log(e.target.value)
    closeModal()
  }

  return (
    <ModalContainer>
      <ModalWrap>
        <TitleText title="약 / 영양제 추가" />
        <div>
          <SelectContainer>
            <Textbox text="약 / 영양제" size="mid" />
            <Select onChange={handleChange}>
              <Option value="약">약</Option>
              <Option value="영양제">영양제</Option>
            </Select>
          </SelectContainer>
          <SelectContainer>
            <Textbox text="약 이름" size="mid" />
            <Input
              onChange={() => {
                console.log('Input onChange')
              }}
            />
          </SelectContainer>
          <SelectContainer>
            <Textbox text="빈도수" size="mid" />
            <Select onChange={handleChange}>
              <Option value="하루에 n번">하루에 n번</Option>
              <Option value="n일에 한 번">n일에 한 번</Option>
              <Option value="요일마다">요일마다</Option>
            </Select>
          </SelectContainer>
          <SelectContainer>
            <Textbox text="복용량" size="mid" />
            <Input
              type={'number'}
              onChange={() => {
                console.log('복용량 Input onChange')
              }}
            />
          </SelectContainer>
          <SelectContainer>
            <Textbox text="잔여량" size="mid" />
            <Input
              type={'number'}
              onChange={() => {
                console.log('잔여량 Input onChange')
              }}
            />
          </SelectContainer>
        </div>
        <div>
          <Button label="닫기" float={false} onClick={closeModal} />
          <Button label="추가하기" float={false} onClick={handleSubmit} />
        </div>
      </ModalWrap>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`

const ModalWrap = styled.div`
  width: 400px;
  height: 600px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 0.5rem 1rem;
`

const SelectContainer = styled.div`
  width: 100%;
`

const Select = styled.select`
  width: 100%;
  height: 30px;
  font-size: 15px;
  font-weight: bold;
`

const Option = styled.option`
  font-size: 15px;
  font-weight: bold;
`

const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 15px;
  font-weight: bold;
`

Modal.propTypes = {
  closeModal: PropTypes.func,
}

export default Modal
