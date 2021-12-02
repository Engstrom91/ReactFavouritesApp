import classes from './WorkshopList.module.css'
import WorkshopItem from './WorkshopItem'

function WorkshopList(props) {
    return (
    <ul className={classes.list}>
        {props.workshops.map((workshop) => (
        <WorkshopItem
            key={workshop.id}
            id={workshop.id}
            image={workshop.image}
            title={workshop.title}
            address={workshop.address}
            description={workshop.description}
            />
            ))}
    </ul>
    );
}

export default WorkshopList;