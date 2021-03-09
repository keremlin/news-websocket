import React from 'react'
import {useState ,useEffect} from 'react'

export default function useHook(value){
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
          setIsOnline(value);});
    return isOnline;

}