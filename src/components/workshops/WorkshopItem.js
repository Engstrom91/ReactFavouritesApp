import { useContext } from 'react';
import classes from './WorkshopItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

function WorkshopItem(props){
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function favoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        }
        else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            });
        }
    }
    
    return(
        <Card>
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={favoriteStatusHandler}>{itemIsFavorite ? 'Unfavorite' : 'Add to Favorites'}</button>
            </div>
        </li>
    </Card>
    )
}

export default WorkshopItem;