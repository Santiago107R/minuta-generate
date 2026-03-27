import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyApp from './MyApp';
import { ThemeProvider } from './components/theme-provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  </StrictMode>,
)
