import React from 'react'
import {useState ,useEffect} from 'react'

export default function useHook(){
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        function handleStatusChange(status) {
          setIsOnline(status.isOnline);
        }
    
        //ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
          //ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
      });

    return isOnline;

}