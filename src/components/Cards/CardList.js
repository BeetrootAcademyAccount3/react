import CardItem from "./CardItem";
import "./CardList.scss";

import { useState } from "react";
import DogDetails from "./Comments/DogDetails";

function CardList() {
  const dogs = [
    {
      id: 0,
      name: "Marcos",
      age: 5,
      description: "Good dog",
    },
    {
      id: 1,
      name: "Alex",
      age: 2,
      description: "Decent dog",
    },
    {
      id: 2,
      name: "John",
      age: 2,
      description: "Bad dog",
    },
    {
      id: 3,
      name: "Julio",
      age: 3,
      description: "The worst dog ever!!!",
    },
    {
      id: 4,
      name: "Ana",
      age: 2,
      description: "Bad dog",
    },
    {
      id: 5,
      name: "Sven",
      age: 3,
      description: "The worst dog ever!!!",
    },
  ];

  const [dogList, setDogList] = useState(dogs);
  const [selectedDog, setSelectedDog] = useState({});
  const [isDogSelected, setIsDogSelected] = useState(false);

  function adoptDog(id) {
    const updatedDogList = dogList.filter((dog) => dog.id !== id);

    setDogList(updatedDogList);
  }

  function selectDogDetails(id) {
    const dogDetails = dogList[id];
    setSelectedDog(dogDetails);
    setIsDogSelected((prevState) => !prevState);
  }

  return (
    <div>
      {isDogSelected ? (
        <DogDetails selectedDog={selectedDog} />
      ) : (
        <ul className="CardList-list">
          {dogList.map((dog, index) => {
            return (
              <li key={dog.id}>
                <CardItem
                  dog={dog}
                  adoptDog={adoptDog}
                  selectDogDetails={selectDogDetails}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CardList;
