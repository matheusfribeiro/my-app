import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

import Home from './pages/Home'
import Customers from './pages/Customers'

const App = () => {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path="/customers">
            <TemplatePage title="Clients" Component={Customers} />
          </Route>
          <Route path="/">
          <TemplatePage title="Home" Component={Home} />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  )
}

export default App
