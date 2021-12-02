import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import WorkshopList from '../components/workshops/WorkshopList'; 

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext)

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorites yet.</p>
  }
  else{
    content = <WorkshopList workshops={favoritesCtx.favorites}/>
  }

  return <section>
  <h1>Favorites</h1>
    {content}
  </section>;
}

export default FavoritesPage;
