import { Route, Switch } from 'react-router-dom';

import AllWorkshopsPage from './pages/AllWorkshops';
import NewWorkshopPage from './pages/NewWorkshop';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
      <Layout>
      <Switch>
        <Route path='/' exact>
          <AllWorkshopsPage />
        </Route>
        <Route path='/new-workshop'>
          <NewWorkshopPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
      </Layout>
  );
}

export default App;
