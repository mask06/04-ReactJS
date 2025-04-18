import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// React uygulamasında DOM modeli kullanılmaz. React teknolojisi V-DOM(Virtual DOM) denilen sanal DOM içerisinde çalıştırılır.
// CreateRoot Metodu ile VDOM oluşturulur.
createRoot(document.getElementById('root')).render(<App />)
