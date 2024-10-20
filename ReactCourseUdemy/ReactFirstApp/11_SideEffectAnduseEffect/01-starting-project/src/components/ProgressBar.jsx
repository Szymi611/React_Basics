import { useEffect, useState } from "react";

export default function ProgressBar({timer}) {
    const [remainingTime, setRemainingTime] = useState(timer);
    
    useEffect(()=>{
        const interval = setInterval(()=>{
        setRemainingTime(prevTime => prevTime - 10)
        console.log('INTERVAL')
        }, 10);

        return () =>{
        console.log('Clear Interval')
        clearInterval(interval);
        }
    }, []);
    return <progress value={remainingTime} max={timer} />

}