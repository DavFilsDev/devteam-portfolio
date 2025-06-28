// components/AnimatedStat.jsx
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedStat({ value, label, colorClass = "text-primary", bgClass = "bg-primary/10", borderClass = "border-primary/20", duration = 1000 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const frameRate = 30; 
    const totalFrames = Math.round(duration / frameRate);
    const increment = end / totalFrames;

    const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
            start = end;
            clearInterval(counter);
        }
        setCount(Math.round(start));
    }, frameRate);

    return () => clearInterval(counter);
    }, [isInView, value, duration]);


    return (
        <motion.div
            ref={ref}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`${bgClass} p-4 rounded-lg border ${borderClass}`}
        >
            <p className={`text-3xl font-bold ${colorClass}`}>{count}{typeof value === "number" && value % 1 !== 0 ? "" : (value === 100 ? "%" : "+")}</p>
            <p className="text-dark dark:text-light">{label}</p>
        </motion.div>
    );
}
