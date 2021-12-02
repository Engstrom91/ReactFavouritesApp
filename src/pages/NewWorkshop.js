import { useHistory } from 'react-router-dom';

import NewWorkshopForm from "../components/workshops/NewWorkshopForm";

function NewWorkshopPage() {
  const history = useHistory();

  function addWorkshopHandler(workshopData) {
    fetch('https://react-workshops-default-rtdb.firebaseio.com/workshops.json',
      {
          method: 'POST',
          body: JSON.stringify(workshopData),
          headers: {
            'Content-Type': 'application/json'
          }
      }
    ).then(() => {
      history.replace('/')
    });
  }

  return <section>
    <h1>Add new Workshop</h1>
    <NewWorkshopForm onAddWorkshop={addWorkshopHandler} />
  </section>;
}

export default NewWorkshopPage;
