import './App.css'
import Body from './components/Body'
import { appStore } from './utility/appStore'
import { Provider } from 'react-redux'
function App() {

  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  )
}

export default App

// features

// Login/ Sign Up
  // Sign In/ Sign up form
  // redirect to browse page
// Browser (after authentication)
  // Header
  // Main section
    // Trailer in background
    // Title & Description
    // MovieSuggestions
      // MovieList*N
// NetflixGPT
  // Search Bar
  // MoveiSuggestions