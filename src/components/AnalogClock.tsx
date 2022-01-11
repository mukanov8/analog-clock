import React, { useEffect } from 'react'
import styled from 'styled-components'
import AnalogClockBase, { AnalogClockBaseProps } from './AnalogClockBase'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import {
  clockHandsDegreeReadOnlyState,
  dateState,
  digitalTimeReadOnlyState,
} from '../stores/analog-clock.store'
import ReactTooltip from 'react-tooltip'

interface AnalogClockProps {
  baseOptions: AnalogClockBaseProps
  handColors: {
    hour: string
    minute: string
    second: string
  }
}

const AnalogClock: React.FC<AnalogClockProps> = ({ baseOptions, handColors, ...props }) => {
  const setDate = useSetRecoilState(dateState)
  const resetDate = useResetRecoilState(dateState)
  const clockHandsDegree = useRecoilValue(clockHandsDegreeReadOnlyState)
  const digitalTime = useRecoilValue(digitalTimeReadOnlyState)

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(clockInterval)
      resetDate()
    }
  }, [])

  return (
    <AnalogClockWrapper {...props}>
      <AnalogClockBase {...baseOptions} data-tip data-for="analog-clock-tooltip">
        <HourHand
          degree={clockHandsDegree.hourHandDegree}
          color={handColors.hour}
          length={baseOptions.size / 2 - 100}
        />
        <MinuteHand
          degree={clockHandsDegree.minuteHandDegree}
          color={handColors.minute}
          length={baseOptions.size / 2 - 60}
        />
        <SecondHand
          degree={clockHandsDegree.secondHandDegree}
          color={handColors.second}
          length={baseOptions.size / 2 - 10}
        />
      </AnalogClockBase>
      <ReactTooltip
        id="analog-clock-tooltip"
        aria-haspopup="true"
        place="right"
        type="dark"
        effect="float"
      >
        {digitalTime}
      </ReactTooltip>
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
  transform: ${({ degree, length }) => `rotate(${degree}deg) translateX(${length / 2}px)`};
  transition: transform linear 0.5s;
`

const MinuteHand = styled.div<{ degree: number; color: string; length: number }>`
  position: absolute;
  width: ${({ length }) => `${length}px`};
  height: 10px;
  background: ${({ color }) => color};
  border-radius: 0 5px 5px 0;

  transform-origin: center;
  transform: ${({ degree, length }) => `rotate(${degree}deg) translateX(${length / 2}px)`};
  transition: transform linear 0.5s;
`

const SecondHand = styled.div<{ degree: number; color: string; length: number }>`
  position: absolute;
  width: ${({ length }) => `${length}px`};
  height: 5px;
  background: ${({ color }) => color};
  border-radius: 0 5px 5px 0;

  transform-origin: center;
  transform: ${({ degree, length }) => `rotate(${degree}deg) translateX(${length / 3}px)`};
  transition: transform linear 1s;
`

export default AnalogClock
