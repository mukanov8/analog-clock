import React from 'react'
import styled from 'styled-components'
import {
  TIME_DEGREE_OFFSET,
  HOUR_LABELS,
} from '../constants/analog-clock.constant'

export interface AnalogClockBaseProps {
  baseColor: string
  labelColor: string
  showNumbers: boolean
  size: number
}

const AnalogClockBase: React.FC<AnalogClockBaseProps> = ({
  baseColor,
  labelColor,
  showNumbers,
  size,
  children,
}) => {
  return (
    <AnalogClockBaseWrapper
      size={size}
      baseColor={baseColor}
      labelColor={labelColor}
    >
      <AnalogClockBaseCenter color={labelColor} />

      {/* tick labels */}
      {Array.from(Array(60)).map((_, index) => (
        <TickLabel
          isBig={index % 5 === 0}
          degree={index * 6}
          color={labelColor}
          key={index.toString()}
          offset={size / 2 - 20}
        />
      ))}

      {/* hour labels */}
      {showNumbers &&
        HOUR_LABELS.map((label, index) => (
          <HourLabel
            key={label.toString() + index.toString()}
            degreeIndex={index}
            color={labelColor}
            offset={size / 2 - 50}
          >
            <span>{label}</span>
          </HourLabel>
        ))}
      {children}
    </AnalogClockBaseWrapper>
  )
}

const AnalogClockBaseWrapper = styled.div<{
  size: number
  baseColor: string
  labelColor: string
}>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${({ baseColor }) => baseColor};
  border-radius: 50%;
  border: ${({ labelColor }) => `6px solid ${labelColor}`};

  display: flex;
  justify-content: center;
  align-items: center;
`

const AnalogClockBaseCenter = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  background: ${({ color }) => color};
  border-radius: 50%;
  z-index: 2;
`

const TickLabel = styled.div<{
  isBig: boolean
  degree: number
  color: string
  offset: number
}>`
  position: absolute;
  width: ${({ isBig }) => (isBig ? '18px' : '9px')};
  height: ${({ isBig }) => (isBig ? '6px' : '3px')};
  border-radius: 2px;
  background: ${({ color }) => color};

  transform-origin: center;
  transform: ${({ degree, offset }) =>
    `rotate(${degree}deg) translateX(${offset}px)`};
`

const HourLabel = styled.div<{
  degreeIndex: number
  color: string
  offset: number
}>`
  position: absolute;
  display: flex;
  color: ${({ color }) => color};

  transform-origin: center;
  transform: ${({ degreeIndex, offset }) =>
    `rotate(${
      degreeIndex * 30 - TIME_DEGREE_OFFSET
    }deg) translateX(${offset}px)`};

  span {
    font-size: 32px;
    font-weight: 500;
    transform: ${({ degreeIndex }) =>
      `rotate(${TIME_DEGREE_OFFSET - degreeIndex * 30}deg)`};
  }
`

export default AnalogClockBase
