import React from "react";
import Card from "./componenets/card"

const App = () => {
  return (
    <div>
      <Card 
      image={`https://images.olx.com.pk/thumbnails/524283401-800x600.webp`}
      price={`22,500`}
      title={`Oppo Reno z 8gb 256gb dual sim pta approve`} 
      location={`Walton Road, Lahore`}
      date={`2 weeks ago`}/>
      <Card
      image={`https://images.olx.com.pk/thumbnails/525080075-800x600.webp`} 
      price={`20,000`}
      title={`Infinix note 12 5G 8 128 gp exchange bhi ho jayega`}
      location={`Tariq Colony, Lahore`}
      date={`34 minutes ago`}/>
      <Card
      image={`https://images.olx.com.pk/thumbnails/519590795-800x600.webp`} 
      price={`18,000,000`}
      title={`Total Geniune Audi E-Tron 2021 Model Full Optional`}
      location={`Johar Town, Lahore`}
      date={`4 weeks ago`}/>
      <Card
      image={`https://images.olx.com.pk/thumbnails/518753704-800x600.webp`} 
      price={`4,900,000`}
      title={`Honda Civic VTi Oriel Prosmatec 2016`}
      location={`F-11 Markaz, Islamabad`}
      date={`4 weeks ago`}/>
      <Card
      image={`https://images.olx.com.pk/thumbnails/466946790-800x600.webp`} 
      price={`1,150,000`}
      title={`Ducati new Model Ducasu Dk 400cc`}
      location={`Township, Lahore`}
      date={`1 week ago`}/>
      <Card
      image={`https://images.olx.com.pk/thumbnails/524752126-800x600.webp`} 
      price={`558,000`}
      title={`Super Star 200cc Model 2024 | SP In Bikes | Total Geniune`}
      location={`DHA Defence Phase 2, Islamabad`}
      date={`1 day ago`}/>
      <Card
      image={`https://images.olx.com.pk/thumbnails/519754763-800x600.webp`} 
      price={`275,000`}
      title={`Apple iPad Pro M4 11" 256GB / iPad Pro 13"`}
      location={`Gulberg 3, Lahore`}
      date={`1 week ago`}/>
      <Card
      image={`https://images.olx.com.pk/thumbnails/476370929-800x600.webp`} 
      price={` 7,999`}
      title={`Tabs for kids&office purpose stock available(Samsung, Lenovo,TCL,LG)`}
      location={`Gulberg, Lahore`}
      date={`3 days ago`}/>
    </div>
  );
};

export default App;