import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import './index.css'
import App from './App.tsx'
import ScrollToTop from './components/design/ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </Provider>
  </StrictMode>,
)
