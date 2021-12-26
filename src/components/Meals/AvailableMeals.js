import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
 const [meals, setMeals] = useState([])
 const [loading, setLoading] = useState(true)
 const [hasError, setError] = useState(false)

  useEffect (()=> {
    const fetchmeals =async ()=> {
    const response = await fetch('https://reactlearn-75355-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json').then()
    
    if(!response.ok)
    {
      setError(true)
    }
    const responseData = await response.json()


    const loadedMeals = []

    loadedMeals.push ({
        id: responseData['id'],
        name: responseData['name'],
        description: responseData['description'],
        price: responseData['price'],
      })
    
      setMeals(loadedMeals)
      setLoading(false)
    }

    fetchmeals()

  }, [])

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));


  if(loading)
  {
    return (
      <section className = {classes.loading}>Loading</section>
    )
  }
  if(hasError)
  {
    return (
      <section className = {classes.loading}>Unexpected behaviour, Please try again</section>
    )
  }
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
