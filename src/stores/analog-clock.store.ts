import { atom, selector } from 'recoil'
import {
  calculateHourHandDegree,
  calculateMinuteHandDegree,
  calculateSecondHandDegree,
} from '../helpers/analog-clock.helper'

export const dateState = atom<Date>({
  key: 'dateState',
  default: new Date(),
})

export const clockHandsDegreeReadOnlyState = selector({
  key: 'clockHandsDegreeReadOnlyState',
  get: ({ get }) => {
    const date = get(dateState)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return {
      hourHandDegree: calculateHourHandDegree(hours, minutes),
      minuteHandDegree: calculateMinuteHandDegree(hours, minutes, seconds),
      secondHandDegree: calculateSecondHandDegree(minutes, seconds),
    }
  },
})

export const digitalTimeReadOnlyState = selector({
  key: 'digitalTimeReadOnlyState',
  get: ({ get }) => {
    const date = get(dateState)
    const digitalTime = date.toTimeString().split(' ')[0]

    return digitalTime
  },
})
