import { useEffect, useState } from 'react';
export default function useLoaderprogress(open,onComplete) {
    const [progress,setProgress] = useState(0);

    useEffect(()=>{
        if(!open) return;

        setProgress(0);

        const timer=setInterval(()=>{
            setProgress((prev)=>{
                if(prev>=100){
                    clearInterval(timer);
                    onComplete && onComplete();
                    return 100;
                }
                return prev+10;
            });
        },300);
        return () =>clearInterval(timer);
    },[open]);
    return progress;
}
