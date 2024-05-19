import logo from './logo.svg';
import './App.css';
import img_recipe from './images/recipe1.jpg';

function Header(props) {

  console.log(props);

  return (
      <header>
        <h1>{props.name}</h1>
      </header>
  );
}

function Main(props){
  return(
    <main>
      <p>Best recipes for quick and {props.adjective} food</p>
      <img src={img_recipe} height={200} ></img>
      <br></br>
      <img src="https://github.com/Szymi611.png" height={200}></img>
      <ul>
        {props.recipes.map((recipe) => (<li key={recipe.id}>{recipe.title}</li>))}
      </ul>
    </main>
  );
}

function Footer(props){
  return(
    <footer>
      <p>Copyright &copy; {props.year}</p>
    </footer>
  );
}

const recipes = [
  "Breakfast recipe",
  'Lunch recipe',
  'Dinner recipe',
  'Snack recipe',
  'Dessert recipe',
  'Supper recipe'
]

const recipeObjects = recipes.map((recipe, recipe_id) => ({id: recipe_id, title: recipe}))

function App() {
  return (
    <div className="App">
      <Header name="My Recipes"/>
      <Main adjective="delicious" recipes={recipeObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
