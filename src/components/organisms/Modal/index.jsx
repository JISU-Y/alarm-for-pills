import React, { useEffect, useState } from 'react'
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
  freqDay: 1,
  freqNum: 1,
  freqMany: 1,
  freqWeekdays: '',
  freqTime: [],
  left: 0,
}

const dayOfWeek = ['월', '화', '수', '목', '금', '토', '일']

const Modal = () => {
  const formDataState = useSelector((state) => state.pills.formData)
  const [formData, setFormData] = useState(formDataState ?? initialFormData)
  const [timeArr, setTimeArr] = useState([])
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
      freqTime: timeArr,
    }))
  }

  useEffect(() => {
    if (formData.freqNum <= 0) return
    const tempArr = new Array(Number(formData.freqNum)).fill(1).map((el, index) => index)
    console.log(tempArr)
    setTimeArr(tempArr)
  }, [formData.freqNum])

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
              <Option value="x일마다 y번">x일마다 y번</Option>
              <Option value="특정 요일마다">특정 요일마다</Option>
            </Select>
            <InnerDiv>
              {formData.freq === '특정 요일마다' ? (
                <>
                  {dayOfWeek.map((day) => (
                    <WeekDayContainer key={day}>
                      <Input
                        type="checkbox"
                        id="freqWeekdays"
                        value={`${day}요일마다`}
                        onclick={handleChange}
                      />
                      <label htmlFor={`${day}요일마다`}>{day}</label>
                    </WeekDayContainer>
                  ))}
                  <p>마다</p>
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
              <Input
                type={'number'}
                id="freqNum"
                value={formData.freqNum}
                onChange={handleChange}
              />
              <p>번</p>
              <Input
                type={'number'}
                id="freqMany"
                onChange={handleChange}
                value={formData.freqMany}
              />
              <p>알씩</p>
            </InnerDiv>
          </SelectContainer>
          {/* 2개 이상 선택 시 시간 선택 늘어나기 */}
          <Textbox text="복용 시간" size="mid" />
          <SelectContainer id="freqTime">
            {timeArr.length > 0 &&
              timeArr.map((el) => (
                <Input
                  key={el}
                  type={'time'}
                  id="freqTime"
                  onChange={handleChange}
                  value={formData.freqTime}
                />
              ))}
          </SelectContainer>
          <Textbox text="잔여량" size="mid" />
          <SelectContainer>
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
  height: ${(props) => (props.id === 'freqTime' ? 'auto' : '40px')};
  display: flex;
  flex-wrap: ${(props) => (props.id === 'freqTime' ? 'wrap' : 'nowrap')};
  gap: ${(props) => (props.id === 'freqTime' ? '5px' : 'unset')};
  margin: 10px 0;
`

const Select = styled.select`
  width: 100%;
  height: 100%;
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
  height: ${(props) => (props.id === 'freqWeekdays' ? 'auto' : '100%')};
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
    font-size: 14px;
  }
`

const WeekDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  margin-right: 4px;
`

export default Modal
