import React, { useState, useMemo } from 'react';

function expensiveFunction(number) {
    console.log("Start");
    const start = new Date();

    while ((new Date() - start) < 3000);

    console.log('Finish', new Date() - start, 'ms');

    return number * number;
}

/**
 * useMemo thực thi 1 tác vụ mất nhiều thời gian
 * sử dụng để cải thiện performance
 * tuy nhiên, nếu lạm dụng sử dụng nhiều, có thể dẫn đến ảnh hưởng tới memories của PC
 * @returns 
 */
function DemoUseMemo() {
    const [count, setCount] = useState(0);

    const numbers = useMemo(() => {
        expensiveFunction(10);
    }, []);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Addsss</button>
            <p>Number: {numbers}</p>
        </>
    );
}

export default DemoUseMemo;

/**
 * - React.useMemo là react hook
 * - React.memo là Higher-Order Component
 */