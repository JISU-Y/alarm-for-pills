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
  freq: 'N일마다',
  freqDay: 0,
  freqWeekdays: [],
  freqTime: '',
  freqMany: 1,
  left: 0,
}

const dayOfWeek = {
  월: 1,
  화: 2,
  수: 3,
  목: 4,
  금: 5,
  토: 6,
  일: 7,
}

const Modal = () => {
  const formDataState = useSelector((state) => state.pills.formData)
  const [formData, setFormData] = useState(
    formDataState ? { ...formDataState, freqWeekdays: [] } : initialFormData,
  )
  const dispatch = useDispatch()

  const handleChange = (e) => {
    console.log(e.target.id)
    console.log(e.target.value)
    console.log(e.target.checked)

    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
      freqWeekdays:
        e.target.id === 'freqWeekdays'
          ? prev.freqWeekdays.includes(e.target.value)
            ? prev.freqWeekdays
                .filter((el) => el !== e.target.value)
                .sort((a, b) => dayOfWeek[a] - dayOfWeek[b])
            : [...prev.freqWeekdays, e.target.value].sort((a, b) => dayOfWeek[a] - dayOfWeek[b])
          : prev.freqWeekdays,
    }))
  }

  const handleSubmit = () => {
    if (Object.values(formData).includes('')) {
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
          <Textbox text="약 / 영양제" size="mid" />
          <SelectContainer>
            <Select onChange={handleChange} id="type" value={formData.type}>
              <Option value="약">약</Option>
              <Option value="영양제">영양제</Option>
            </Select>
            <InnerDiv>
              <Input
                id="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="약/영양제 이름"
              />
            </InnerDiv>
          </SelectContainer>
          <Textbox text="복용 주기" size="mid" />
          <SelectContainer>
            <Select onChange={handleChange} id="freq" value={formData.freq}>
              <Option value="N일마다">N일마다</Option>
              <Option value="O요일마다">O요일마다</Option>
            </Select>
            <InnerDiv>
              {formData.freq === 'O요일마다' ? (
                <>
                  {Object.keys(dayOfWeek).map((day) => (
                    <WeekDayContainer key={day}>
                      <Input
                        type="checkbox"
                        id="freqWeekdays"
                        value={day}
                        onChange={handleChange}
                      />
                      <label htmlFor={day}>{day}</label>
                    </WeekDayContainer>
                  ))}
                  <p>요일마다</p>
                </>
              ) : (
                <>
                  <Input
                    type={'number'}
                    id="freqDay"
                    value={formData.freqDay}
                    onChange={handleChange}
                  />
                  <p>일마다</p>
                </>
              )}
            </InnerDiv>
          </SelectContainer>
          <Textbox text="복용 시간 및 복용량" size="mid" />
          <SelectContainer id="freqTime">
            <Input type={'time'} id="freqTime" onChange={handleChange} value={formData.freqTime} />
            <span>시에</span>
            <Input
              type={'number'}
              id="freqMany"
              onChange={handleChange}
              value={formData.freqMany}
            />
            <span>알씩</span>
          </SelectContainer>
          <Textbox text="잔여량" size="mid" />
          <SelectContainer>
            <Input type={'number'} id="left" onChange={handleChange} value={formData.left} />
          </SelectContainer>
        </div>
        <ButtonContainer>
          <Button label="닫기" float={false} onClick={handleClose} />
          <Button
            label={formDataState ? '수정하기' : '추가하기'}
            float={false}
            onClick={handleSubmit}
          />
        </ButtonContainer>
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
  display: flex;
  margin: 10px 0;
  align-items: center;
  ${SelectContainer} span {
    margin-right: 10px;
  }
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
  width: ${(props) =>
    props.id === 'freqDay' || props.id === 'freqNum' || props.id === 'freqMany'
      ? '30px'
      : props.id === 'freqTime'
      ? '130px'
      : '100%'};
  font-size: 15px;
  font-weight: bold;
  box-sizing: border-box;
  padding: 5px 0;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  [type='number'] {
    -moz-appearance: textfield;
  }
`

const InnerDiv = styled.div`
  width: 235%;
  display: flex;
  margin-left: 10px;
  justify-content: flex-end;
  align-items: center;
  ${InnerDiv} p {
    margin: 0;
    margin-right: 5px;
  }
`

const WeekDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${ButtonContainer} Button {
    margin: 3px;
  }
`

export default Modal
