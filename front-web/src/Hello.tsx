import { useEffect } from "react";

type Props = {
    message: string;
}

function Hello({ message}: Props) {
    
    useEffect(() => {
        // chamada para a API
    }, [])
    
    return (
        <div>
            <h1>Hello {message}!</h1>
        </div>
    )
}

export default Hello;