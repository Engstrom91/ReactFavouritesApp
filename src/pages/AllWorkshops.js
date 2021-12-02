import { useState, useEffect } from "react";

import WorkshopList from "../components/workshops/WorkshopList";

function AllWorkshopsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedWorkshops, setLoadedWorkshops] = useState([]);

  useEffect(() => {
    setIsLoading(true);
  fetch('https://react-workshops-default-rtdb.firebaseio.com/workshops.json').then(response => {
      return response.json();
    }).then(data => {
      const workshops = [];

      for(const key in data){
        const workshop = {
          id: key,
          ...data[key]
        };

        workshops.push(workshop);
      }

      setIsLoading(false);
      setLoadedWorkshops(workshops);
    });
  }, []);

  if(isLoading){
    return <section>
      <p>Loading workshops...</p>
    </section>
  }

  return (
  <section>  
    <h1>All Workshops</h1>
    <WorkshopList workshops={loadedWorkshops}/>
  </section>)
}

export default AllWorkshopsPage;
