//@ts-ignore
import AOS from 'aos';
import { useEffect } from "react";

function aosInit   ()  {
    useEffect(() => {
        AOS.init();
    }, [])
}

export default aosInit