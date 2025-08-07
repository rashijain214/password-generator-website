# 🔐 SecurePass - Password Generator

A modern, responsive password generator built with React and Vite. Generate strong, secure passwords with customizable options.

## ✨ Features

-  **Customizable Length** - Generate passwords from 8 to 50 characters
- **Numbers Support** - Include or exclude numbers (0-9)
-  **Special Characters** - Include or exclude special characters (!@#$%^&*)
-  **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
-  **Modern UI** - Beautiful gradient design with glass morphism effects
-  **One-Click Copy** - Copy passwords to clipboard instantly
-  **Fast & Secure** - Client-side generation, no data stored
-  **Real-time Generation** - Passwords update as you change settings


## 🛠️ Built With

- **React 19** - Modern React with hooks
- **Vite** - Lightning fast build tool
- **CSS3** - Modern styling with gradients and animations
- **Responsive Design** - Mobile-first approach

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rashijain214/passwordgen-website.git
   cd passwordgen-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 🚢 Deployment Options


## 🔧 Configuration

### Password Options
- **Minimum Length**: 8 characters
- **Maximum Length**: 50 characters
- **Character Sets**:
  - Uppercase: A-Z
  - Lowercase: a-z
  - Numbers: 0-9 (optional)
  - Special: !@#$%^&*()_+ (optional)




## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## 🏗️ Project Structure

```
passwordgen-website/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   └── react.svg
│   ├── App.jsx          # Main component
│   ├── App.css          # Styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml   # Auto-deployment
├── package.json
├── vite.config.js
└── README.md
```

## 🔒 Security Features

- **Client-Side Only** - No passwords sent to servers
- **No Data Storage** - Passwords not saved anywhere
- **Cryptographically Secure** - Uses Math.random() for generation
- **Privacy Focused** - No tracking or analytics

## 🌟 Roadmap

- [ ] Password strength indicator
- [ ] Custom character sets
- [ ] Password history (local storage)
- [ ] Pronounceable passwords
- [ ] Export/import settings
- [ ] Dark/light theme toggle

