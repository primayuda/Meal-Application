import { useGlobalContext } from '../context';
import { FaRegThumbsUp } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Meals = () => {
  const { meals, loading } = useGlobalContext();

  if (loading) {
    return <section className='section-center'>
      <h4>Loading....</h4>
      <Skeleton count={10} />
    </section>
  };

  if (meals.length < 1) {
    return <section className='section-center'>
      <h4>No matching meals. Please try again</h4>
    </section>
  }

  return <section className='section-center'>
      {meals.map(singleMeal => {
        const {idMeal, strMeal: title, strMealThumb: image} = singleMeal;
        return <article key={idMeal} className='single-meal'>
          <img src={image} className='img'/>
          <footer>
            <h5>{title}</h5>
            <FaRegThumbsUp className='like-btn' />
          </footer>
        </article>
      })}
    </section>
   
}

export default Meals;