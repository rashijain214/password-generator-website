import { useState, useCallback, useEffect } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    alert('Password copied to clipboard!')
  }

  const generatepassword=useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numberAllowed)str+="0123456789"
if(charAllowed) str+="!@#$%^&*()_+"
for(let i = 0; i < length; i++){
  const char = Math.floor(Math.random() * str.length)
  pass += str.charAt(char)
}
setPassword(pass)
  },[length,numberAllowed,charAllowed])
useEffect(()=>{
  generatepassword()
},[length,numberAllowed,charAllowed])
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <img src={logo} alt="Password Generator Logo" className="header-logo"/>
            <span className="brand-name">SecurePass</span>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Navigation */}
          <nav className={`navigation ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#generator" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Generator</a>
            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div 
              className="mobile-overlay" 
              onClick={() => setMobileMenuOpen(false)}
            ></div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <h1>Random Password Generator</h1>
          <p className="subtitle">Create strong, secure passwords instantly</p>
          
          <div className="password-section">
            <div className="password-box">
              <input 
                type="text" 
                value={password} 
                placeholder='Your secure password will appear here' 
                readOnly
                className="password-input"
              />
              <div className="button-group">
                <button onClick={generatepassword} className="generate-btn">Generate Password</button>
                <button onClick={copyToClipboard} disabled={!password} className="copy-btn">Copy</button>
              </div>
            </div>
            
            <div className="controls">
              <div className="length-control">
                <label>Password Length: {length}</label>
                <input 
                  type="range" 
                  min="8" 
                  max="50" 
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="range-slider"
                />
              </div>
              
              <div className="checkbox-controls">
                <div className="checkbox-item">
                  <input 
                    type="checkbox" 
                    id="numbers"
                    checked={numberAllowed}
                    onChange={() => setNumberAllowed((prev)=>!prev)}
                  />
                  <label htmlFor="numbers">Include Numbers (0-9)</label>
                </div>
                
                <div className="checkbox-item">
                  <input 
                    type="checkbox" 
                    id="characters"
                    checked={charAllowed}
                    onChange={() => setCharAllowed((prev)=>!prev)}
                  />
                  <label htmlFor="characters">Include Special Characters (!@#$%^&*)</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <div className="footer-brand">
              <img src={logo} alt="Logo" className="footer-logo"/>
              <span className="footer-brand-name">SecurePass</span>
            </div>
            <p className="footer-description">
              Generate strong, secure passwords to protect your digital life.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Features</h3>
            <ul>
              <li>Strong Password Generation</li>
              <li>Customizable Length</li>
              <li>Special Characters Support</li>
              <li>One-Click Copy</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Security</h3>
            <ul>
              <li>No Data Storage</li>
              <li>Client-Side Generation</li>
              <li>Privacy Focused</li>
              <li>Open Source</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 SecurePass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
