import { useEffect, useRef, useState } from 'react';
import { Timer as TimerProps, useTimersContext } from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer({name, duration}: TimerProps) {
  const [remainingTime, setRemainingState] = useState(duration *1000)
  const interval = useRef<number | null>(null)
  const {isRunning} = useTimersContext()
  if(remainingTime <=0 && interval.current) {
    clearInterval(interval.current)
  }

  useEffect(() => {
    let timer: number
    if(isRunning) {
      timer = setInterval(function() {
        setRemainingState(prevTime => prevTime <= 0 ? prevTime: prevTime - 50)
      }, 50)
      interval.current = timer
    } else if(interval.current) {
      clearInterval(interval.current)
    }


    return () => {
      clearInterval(timer)
    }
  }, [isRunning])

  const formattedRemainingTime = (remainingTime/1000).toFixed(2)

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration*1000} value={remainingTime}/></p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
