import React,{Fragment} from 'react'
import {Routes,Route} from 'react-router-dom';
import MainNavigation from './Components/MainNavigation/MainNavigation';
import AllQuotes from './Components/Pages/AllQuotes';
import NewQuote from './Components/Pages/NewQuote';
import ShowQuote from './Components/Pages/ShowQuote';
const App = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<AllQuotes />}/>
          <Route path='/new' element={<NewQuote />}/>
          <Route path='/quotes/:id' element={<ShowQuote />} />

        </Routes>
      </main>
    </Fragment>
  )
}

export default App