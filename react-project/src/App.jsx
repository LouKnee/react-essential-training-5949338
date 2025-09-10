import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}
const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables and Rice",
  "Pasta with Meatballs",
  "Steak and Potatoes",
  "Chicken with Rice and Vegetables",
];

const dishObj = items.map((dish, idx) => ({ id: idx, name: dish }));

function Main({ dishes }) {
  return (
    <ul>
      { dishes.map((dish) => (
        <li key={dish.id} style={{ listStyleType: "none" }}>
          {dish.name}
        </li> 
      )) }   
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObj} />
    </div>
  );
}

export default App;
