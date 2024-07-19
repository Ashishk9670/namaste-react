import {useState,useEffect} from 'react';

const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStaus] = useState(true);
    // check status
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStaus(false);
        });
        window.addEventListener("online", () => {
            setOnlineStaus(true);
        });

    },[]);

    return onlineStatus;
}

export default useOnlineStatus;