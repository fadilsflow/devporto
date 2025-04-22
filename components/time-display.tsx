'use client'

import { useEffect, useState } from 'react'

interface TimeDisplayProps {
  location: string
}

export function TimeDisplay({ location }: TimeDisplayProps) {
  const [time, setTime] = useState<string>('')
  const [period, setPeriod] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      const currentPeriod = hours >= 12 ? 'PM' : 'AM'
      const displayHours = hours % 12 || 12

      setTime(`${displayHours}:${minutes}:${seconds}`)
      setPeriod(currentPeriod)
    }

    // Update immediately
    updateTime()

    // Update every second
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center ">
      <div className="flex items-center gap-1">
        <span className="text-xs text-muted-foreground font-medium tabular-nums">{time}</span>
        <span className="text-xs text-muted-foreground font-medium ">{period}</span>
      </div>
      <span className="text-xs text-muted-foreground font-medium ">{location}</span>
    </div>
  )
} 