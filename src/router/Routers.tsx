import { Suspense } from 'react'
import Home from '../views/Home'

function Routers() {
    //路遊懶加載
    const About = lazy(()=>import('../views/About'))
    return (
      <div className="App bg-black">
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
            </Routes>
        </Suspense>
      </div>
    )
  }
  
export default Routers