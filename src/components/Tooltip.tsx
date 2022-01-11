import React from 'react'
import styled from 'styled-components'

const TooltipText = styled.div`
  background: rgba(28, 56, 151, 0.9);
  color: #fff;
  width: 200px;
  text-align: center;
  line-height: 44px;
  border-radius: 3px;
  cursor: pointer;
`

const TooltipBox = styled.div`
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;

  position: absolute;
  top: calc(100% + 10px);
  left: 30px;
  &:before {
    content: '';
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.4s ease-in-out;
  }
`

const TooltipCard = styled.div`
  margin: 16px;
  position: relative;
  margin: 16px;
  & ${TooltipText}:hover + ${TooltipBox} {
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`

interface TooltipProps {
  title: string
  text: string
}

const Tooltip: React.FC<TooltipProps> = ({ title, text }) => {
  return (
    <TooltipCard>
      <TooltipText>
        <h1>{title}</h1>
      </TooltipText>
      <TooltipBox>
        <p>{text}</p>
      </TooltipBox>
    </TooltipCard>
  )
}

export default Tooltip
