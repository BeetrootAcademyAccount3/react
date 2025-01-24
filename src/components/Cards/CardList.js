import CardItem from "./CardItem";
import "./CardList.scss";

function CardList() {
  const lotteryNumbers = [2, 34, 24, 11, 7, 19];
  const dogs = [
    {
      id: 1,
      name: "Marcos",
      age: 5,
      description: "Good dog",
    },
    {
      id: 2,
      name: "Alex",
      age: 2,
      description: "Decent dog",
    },
    {
      id: 3,
      name: "John",
      age: 2,
      description: "Bad dog",
    },
    {
      id: 4,
      name: "Julio",
      age: 3,
      description: "The worst dog ever!!!",
    },
    {
      id: 5,
      name: "Ana",
      age: 2,
      description: "Bad dog",
    },
    {
      id: 6,
      name: "Sven",
      age: 3,
      description: "The worst dog ever!!!",
    },
  ];

  return (
    <div>
      <ul>
        {lotteryNumbers.map((number, index) => (
          <span key={index}>
            {number}
            {index !== lotteryNumbers.length - 1 && <span>,</span>}
          </span>
        ))}
      </ul>
      <ul className="CardList-list">
        {dogs.map((dog, index) => {
          return (
            <li key={dog.id}>
              <CardItem dog={dog} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardList;
