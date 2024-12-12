'use client'
import { useState } from "react" 

const ClientPage = () => {
    
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <h1 className="text-7xl font-bold mb-4">
                {count}
                <button className="btn btn-primary" 
                    onClick={() => setCount(count + 1)}>Plus</button>
            </h1>

        </div>
    )
}

export default ClientPage