import React from 'react'
import SignUp from './components/SignUp'
import Login from './components/Login'
import ChatBot from './components/ChatBot'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import PrivateRouter from './firebase/PrivateRouter'
import AuthProvider from './firebase/AuthProvider'

const App = () => {
  return (
    <AuthProvider>
      < Router >
        <Switch>
          <PrivateRouter exact path='/' component={ChatBot} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </Router >
    </AuthProvider>

  )
}
//

export default App