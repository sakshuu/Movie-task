import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookTickets, Details, Home, Page404 } from './pages'
import { MyNavbar } from './components'
import "./assets/css/App.css"

const App = () => {
  return  <>
      <BrowserRouter>
      <Routes>
<Route path="/" element={<MyNavbar/>}  >
<Route index element={<Home/>}  />
<Route path="details" element={<Details/>}  />
{/* <Route path='trailer' element={<Trailer/>}/> */}
{/* <Route path="user-signUp" element={<Register/>}  /> */}
<Route path="book-tickets" element={<BookTickets/>}  />
{/* <Route path="book-seats" element={<BooksSeats/>}  /> */}
{/* <Route path="payment" element={<Payments/>}/> */}
    </Route>
    <Route path="*" element={<Page404/>}/>
    </Routes>
    </BrowserRouter>
  </>
}

export default App