import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    favoritesCount: 0,
    addFavorite: (favoriteWorkshop) => {},
    removeFavorite: (workshopId) => {},
    itemIsFavorite: (workshopId) => {}
});

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteWorkshop) {
        setUserFavorites((prevUserFavorites) => { 
            return prevUserFavorites.concat(favoriteWorkshop);
        });
    }

    function removeFavoriteHandler(workshopId){
        setUserFavorites(prevUserFavorites =>{
            return prevUserFavorites.filter(workshop => workshop.id !== workshopId);
        })
    }

    function itemIsFavortieHandler(workshopId) {
        return userFavorites.some(workshop => workshop.id === workshopId);
    }

    const context = {
        favorites: userFavorites,
        favoritesCount: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavortieHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}
export default FavoritesContext;
