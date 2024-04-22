import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'

ReactDOM.createRoot(document.getElementById('global-navigation')!).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('global-footer')!).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)
