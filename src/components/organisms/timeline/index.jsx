import React from 'react'
import styled from 'styled-components'
import Title from '../../molecules/Title'
import Timetable from 'react-timetable-events'

const Timeline = () => {
  return (
    <TLContainer>
      <Title title="Timeline" infoText="" toggle={false} />
      <Timetable
        events={{
          monday: [
            {
              id: 1,
              name: '소화제',
              type: 'custom',
              startTime: new Date('2018-02-23T11:30:00'),
              endTime: new Date('2018-02-23T13:30:00'),
            },
          ],
        }}
        hoursInterval={{ from: 9, to: 20 }}
        timeLabel={'시간'}
      />
    </TLContainer>
  )
}

const TLContainer = styled.div`
  grid-column: 1 / -1;
`

export default Timeline
