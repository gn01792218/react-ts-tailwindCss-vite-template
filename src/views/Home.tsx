import logo from '../assets/images/logo.svg'
import { useState } from 'react'
function Home() {
    const [count, setCount] = useState(0)
    return (
        <div className='text-white'>
            這是首頁
            <header className="text-white">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <p>
                    <button type="button" onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </button>
                </p>
                <p>
                </p>
            </header>
        </div>
    )
}
export default Home