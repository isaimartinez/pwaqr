import React from 'react'
import { Routes, Route} from 'react-router-dom'
import {Layout, RequireAuth} from 'components'
import {Main, Login} from 'pages'


const App = () => {
  return (
    <div>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className={'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2'}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path='login' element={<Login /> }/>
              <Route element={<RequireAuth  />}>
                <Route path="/" element={<Main />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
