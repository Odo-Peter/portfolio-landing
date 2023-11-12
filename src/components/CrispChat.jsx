import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure('45ae5942-7eac-40ee-b003-86e54dd2d355');
    }, [])

    return null;
}