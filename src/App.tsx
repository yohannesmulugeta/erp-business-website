import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import CoffeeErpPage from './pages/CoffeeErpPage'
import IndustriesPage from './pages/IndustriesPage'
import WorkPage from './pages/WorkPage'
import ProcessPage from './pages/ProcessPage'
import AboutPage from './pages/AboutPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import LegalPage from './pages/LegalPage'

export default function App(){return <Routes><Route element={<Layout/>}><Route path="/" element={<HomePage/>}/><Route path="/services" element={<ServicesPage/>}/><Route path="/coffee-erp" element={<CoffeeErpPage/>}/><Route path="/industries" element={<IndustriesPage/>}/><Route path="/work" element={<WorkPage/>}/><Route path="/process" element={<ProcessPage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/faq" element={<FaqPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/privacy" element={<LegalPage type="privacy"/>}/><Route path="/terms" element={<LegalPage type="terms"/>}/><Route path="*" element={<HomePage/>}/></Route></Routes>}
