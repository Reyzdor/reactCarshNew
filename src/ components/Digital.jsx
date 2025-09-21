import { useState, useEffect } from "react";

export default function DigitalScroll({ value, suffix = '' }) {
    const [displayValue, setDisplayValue] = useState(null); 

    useEffect(() => {
        if (value === null || value === undefined) return;
        
        let start = 0;
        const duration = 1500;
        const stepTime = 20;
        const totalSteps = duration / stepTime;
        const increment = value / totalSteps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setDisplayValue(value);
                clearInterval(timer);
            } else {
                setDisplayValue(Math.floor(start));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [value]);

    if (displayValue === null) {
        return <span className="digit-scroll"></span>;
    }

    return (
        <span className="digit-scroll">
            {displayValue.toLocaleString()}{suffix}
        </span>
    );
}