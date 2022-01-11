import { TIME_DEGREE_OFFSET } from '../constants/analog-clock.constant'

export const calculateHourHandDegree = (hours: number, minutes: number) => {
  return hours * 30 + minutes * 0.5 - TIME_DEGREE_OFFSET
}

export const calculateMinuteHandDegree = (hours: number, minutes: number, seconds: number) => {
  return hours * 360 + minutes * 6 + seconds / 12 - TIME_DEGREE_OFFSET
}

export const calculateSecondHandDegree = (minutes: number, seconds: number) => {
  return minutes * 360 + seconds * 6 - TIME_DEGREE_OFFSET
}

export const calculateHourLabelDegree = (labelIndex: number) => {
  return labelIndex * 30 - TIME_DEGREE_OFFSET
}

export const calculateTickLabelDegree = (labelIndex: number) => {
  return labelIndex * 6
}
