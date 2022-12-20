import React, {useEffect, useState} from "react";

function useLocalState(defaultValue:any, key:any){
    const [value, setValue] = useState(() => {
        const localValue = localStorage.getItem(key);
        return localValue !== null ? JSON.stringify(localValue) : defaultValue;
    });

    useEffect(() => {
       localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
    return [value, setValue];
}

export {useLocalState};