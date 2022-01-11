import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AnalogClockBase, { AnalogClockBaseProps } from './AnalogClockBase'
import { TIME_DEGREE_OFFSET } from '../constants/analog-clock.constant'

interface AnalogClockProps {
  baseOptions: AnalogClockBaseProps
  handColors: {
    hour: string
    minute: string
    second: string
  }
}

const AnalogClock: React.FC<AnalogClockProps> = ({
  baseOptions,
  handColors,
}) => {
  const currentDate = new Date()

  const [hourDegree, setHourDegree] = useState(
    currentDate.getHours() * 30 + currentDate.getMinutes() / 2
  )
  const [minuteDegree, setMinuteDegree] = useState(
    currentDate.getMinutes() * 6 + currentDate.getSeconds() / 12
  )
  const [secondDegree, setSecondDegree] = useState(currentDate.getSeconds() * 6)

  useEffect(() => {
    setInterval(() => {
      const newDate = new Date()
      setSecondDegree(newDate.getSeconds() * 6)
      setMinuteDegree(newDate.getMinutes() * 6 + newDate.getSeconds() / 12)
      setHourDegree(newDate.getHours() * 30 + newDate.getMinutes() / 2)
    }, 1000)
    return () => {
      clearInterval()
    }
  })

  return (
    <AnalogClockWrapper>
      <AnalogClockBase {...baseOptions}>
        <HourHand
          degree={hourDegree - TIME_DEGREE_OFFSET}
          color={handColors.hour}
          length={baseOptions.size / 2 - 100}
        />
        <MinuteHand
          degree={minuteDegree - TIME_DEGREE_OFFSET}
          color={handColors.minute}
          length={baseOptions.size / 2 - 60}
        />
        <SecondHand
          degree={secondDegree - TIME_DEGREE_OFFSET}
          color={handColors.second}
          length={baseOptions.size / 2 - 10}
        />
      </AnalogClockBase>
    </AnalogClockWrapper>
  )
}

const AnalogClockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HourHand = styled.div<{ degree: number; color: string; length: number }>`
  position: absolute;
  width: ${({ length }) => `${length}px`};
  height: 10px;
  background: ${({ color }) => color};
  z-index: 1;
  border-radius: 0 5px 5px 0;

  transform-origin: center;
  transform: ${({ degree, length }) =>
    `rotate(${degree}deg) translateX(${length / 2}px)`};
  transition: transform linear 0.5s;
`

const MinuteHand = styled.div<{
  degree: number
  color: string
  length: number
}>`
  position: absolute;
  width: ${({ length }) => `${length}px`};
  height: 10px;
  background: ${({ color }) => color};
  border-radius: 0 5px 5px 0;

  transform-origin: center;
  transform: ${({ degree, length }) =>
    `rotate(${degree}deg) translateX(${length / 2}px)`};
  transition: transform linear 0.5s;
`

const SecondHand = styled.div<{
  degree: number
  color: string
  length: number
}>`
  position: absolute;
  width: ${({ length }) => `${length}px`};
  height: 5px;
  background: ${({ color }) => color};
  border-radius: 0 5px 5px 0;

  transform-origin: center;
  transform: ${({ degree, length }) =>
    `rotate(${degree}deg) translateX(${length / 3}px)`};
  transition: transform linear 1s;
`

export default AnalogClock
