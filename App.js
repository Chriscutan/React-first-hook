import logo from './logo.svg';
import './App.css';
import FoodCard from './Components/FoodCard';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className='screen'>
      <div className='navbar'>
        <NavBar />
      </div>
      <div className='food'>
        <FoodCard name='Veg Supreme Burger' des='The best veg burger' price='99' img='https://source.unsplash.com/1900x900?burger'/>
        <FoodCard name='Veg Pizza' des='Complete veg pizza' price='199' img='https://source.unsplash.com/1900x900?pizza'/>
        <FoodCard name='Salad' des='Veg salad' price='299' img='https://source.unsplash.com/1900x900?salad'/>
        <FoodCard name='Pasta' des='Cheese Pasta' price='249' img='https://source.unsplash.com/1900x900?pasta' />
        <FoodCard name='Momos' des='Veg Momos' price='169' img='https://source.unsplash.com/1900x900?momos' />
        <FoodCard name='Sandwich' des='Chicken Sandwich' price='120' img='https://source.unsplash.com/1900x900?sandwich' />
        <FoodCard name='Shawarma' des='Chicken shawarma' price='60' img='https://source.unsplash.com/1900x900?shawarma' />
        <FoodCard name='Idli Sambar' des='Idli' price='50' img='https://source.unsplash.com/1900x900?idli' />
      </div>
    </div>
  );
}

export default App;
