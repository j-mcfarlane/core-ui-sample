import * as dateFns from 'date-fns'
import { useEffect, useState } from 'react'

export interface CountdownTextProps {
    time: string
    onComplete: () => void
}

export function CountdownText({ time, onComplete }: CountdownTextProps) {
    const processVerificationTime = (time: string) => {
        const sent = new Date(time)
        const future = dateFns.addMinutes(sent, 5)
        const currentTime = new Date()

        if (!time) {
            return '05:00'
        }

        if (currentTime > future) {
            return '00:00'
        } else {
            const remainingTime = future.getTime() - currentTime.getTime()
            const minutes = Math.floor(remainingTime / 60000)
            const seconds = Math.floor((remainingTime % 60000) / 1000)

            const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

            return minutes > 9 ? `${minutes}:${formattedSeconds}` : `0${minutes}:${formattedSeconds}`
        }
    }

    const [timer, setTimer] = useState<string>(processVerificationTime(time))

    useEffect(() => {
        const interval = setInterval(() => {
            const result = processVerificationTime(time)
            setTimer(result)

            if (result === '00:00') {
                onComplete()
                clearInterval(interval)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [time, onComplete])

    return <>{timer}</>
}
