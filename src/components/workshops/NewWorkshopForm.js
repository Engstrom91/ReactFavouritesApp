import { useRef } from 'react';

import Card from "../ui/Card";
import classes from './NewWorkshopForm.module.css';



function NewWorkshopForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
    
        const workshopData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };
            props.onAddWorkshop(workshopData)
        
    }
    return (
    <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Workshop Title</label> 
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Workshop Image</label> 
                <input type="url" required id="image" ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label> 
                <input type="text" required id="address" ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label> 
                <textarea id="description" required rows='5'  ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.action}>
                <button>Add Workshop</button>
            </div>
        </form>
    </Card>);
}

export default NewWorkshopForm;