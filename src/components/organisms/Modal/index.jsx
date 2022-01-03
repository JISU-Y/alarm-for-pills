import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import Textbox from '../../atoms/Textbox'
import TitleText from '../../atoms/TitleText'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, createPill, updatePill } from '../../../redux'

const initialFormData = {
  type: '약',
  name: '',
  freq: '하루에 n번',
  freqDetail: '',
  many: 0,
  time: '',
  left: 0,
}

const dayOfWeek = ['월', '화', '수', '목', '금', '토', '일']

const Modal = () => {
  const formDataState = useSelector((state) => state.pills.formData)
  console.log(formDataState)
  const [formData, setFormData] = useState(formDataState ?? initialFormData)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = () => {
    if (Object.values(formData).includes('') || Object.values(formData).includes(0)) {
      // no input early return
      console.log('no input modal')
      return
    }

    console.log(formData)

    if (formDataState) {
      dispatch(updatePill(formData))
    } else {
      dispatch(createPill(formData))
    }

    dispatch(closeModal())
  }

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <ModalContainer>
      <ModalWrap>
        <TitleText title="약 / 영양제 추가" />
        <div>
          <SelectContainer>
            <Textbox text="약 / 영양제" size="mid" />
            <Select onChange={handleChange} id="type" value={formData.type}>
              <Option value="약">약</Option>
              <Option value="영양제">영양제</Option>
            </Select>
          </SelectContainer>
          <SelectContainer>
            <Textbox text="약 이름" size="mid" />
            <Input id="name" onChange={handleChange} value={formData.name} />
          </SelectContainer>
          <SelectContainer>
            <Textbox text="복용 주기" size="mid" />
            <Select onChange={handleChange} id="freq" value={formData.freq}>
              <Option value="하루에 n번">하루에 n번</Option>
              <Option value="n일에 한 번">n일에 한 번</Option>
              <Option value="요일마다">요일마다</Option>
            </Select>
          </SelectContainer>
          <SelectContainer>
            <Textbox text="복용 주기 상세" size="mid" />
            {formData.freq === '요일마다' ? (
              dayOfWeek.map((day) => (
                <div key={day}>
                  <Input
                    type="checkbox"
                    id="freqDetail"
                    value={`${day}요일마다`}
                    onclick={handleChange}
                  />
                  <label htmlFor={`${day}요일마다`}>{day}요일마다</label>
                </div>
              ))
            ) : (
              <Input
                type={'number'}
                id="freqDetail"
                value={formData.freqDetail}
                onChange={handleChange}
              />
            )}
          </SelectContainer>
          <SelectContainer>
            <Textbox text="복용량" size="mid" />
            <Input type={'number'} id="many" onChange={handleChange} value={formData.many} />
          </SelectContainer>
          {/* 2개 이상 선택 시 시간 선택 늘어나기 */}
          <SelectContainer>
            <Textbox text="복용 시간" size="mid" />
            <Input type={'time'} id="time" onChange={handleChange} value={formData.time} />
          </SelectContainer>
          <SelectContainer>
            <Textbox text="잔여량" size="mid" />
            <Input type={'number'} id="left" onChange={handleChange} value={formData.left} />
          </SelectContainer>
        </div>
        <div>
          <Button label="닫기" float={false} onClick={handleClose} />
          <Button
            label={formDataState ? '수정하기' : '추가하기'}
            float={false}
            onClick={handleSubmit}
          />
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

export default Modal
