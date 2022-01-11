import React from 'react'
import styled from 'styled-components'
import AnalogClock from './components/AnalogClock'
import { DEFAULT_CLOCK_OPTIONS } from './constants/analog-clock.constant'

// you can use custom styling options

// const CLOCK_OPTIONS = {
//   baseOptions: {
//     baseColor: '#aaaaaa',
//     labelColor: '#d97a90',
//     showNumbers: false,
//     size: 400,
//   },
//   handColors: {
//     second: '#d81c7a',
//     minute: '#459cff',
//     hour: '#446aaa',
//   },
// }

const App = () => {
  return (
    <MainWrapper>
      <AnalogClock data-testid="analog-clock" {...DEFAULT_CLOCK_OPTIONS} />
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

export default App
