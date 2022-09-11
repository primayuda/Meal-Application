import { useContext } from 'react';
import { AppContext } from '../context';

const Meals = () => {
  const context = useContext(AppContext)
  return (
    <>
      <h1>Meals</h1>
      <p>The value is {context}</p>
    </>
  )
}

export default Meals;