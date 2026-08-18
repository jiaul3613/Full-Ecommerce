//import Flash from "../component/Flash"
import Hero from "../component/Hero"
import Today from "../component/Today"
import Card from '../component/Card'
import Container from "../component/Container"
import img1 from '../assets/Frame571.png'
import img2 from '../assets/Frame570.png'
import img3 from '../assets/Frame614.png'
import img4 from '../assets/Frame613.png'
import BestSale from "../component/BestSale"
import Category from "../component/Category"
import Music from "../component/Music"
import NewArrival from "../component/NewArrival"
import Product from "../component/Product"
//import  Counter  from './../features/counter/Counter';
import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux';






const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

    useEffect(() => {
      fetch('https://dummyjson.com/products?limit=100') // Fetches more products so categories aren't limited
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Failed to fetch products:', err);
          setLoading(false);
        });
    }, []);
 

  return (
    <div>
      <Container>
        <Hero />
        <Today />

        <div className="grid grid-cols-4">
       {products.map((item) => (
                <Card 
                key={item.id} 
                productdtl={item}
                img1={item.thumbnail} 
                op={item.price} 
                dis={item.discountPercentage} 
                np={(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)} 
                title={item.title} 
                reviewCount={item.reviews?.length || 0} 
                rating={item.rating} 
              />
              ))}
       

        {/* <Card  img1={img1} name='HAVIT HV-G92 Gamepad' np={120} op={160} dis={'-40%'} rating={5} reviewCount={88} />
        <Card  img1={img2} name='AK-900 Wired Keyboard' np={960} op={1160} dis={'-35%'} rating={4.5} reviewCount={75} />
        <Card  img1={img3} name='S-Series Comfort Chair' np={375} op={400} dis={'-20%'} rating={4.5} reviewCount={99} />
        <Card  img1={img4} name='IPS LCD Gaming Monitor' np={370} op={400} dis={'-30%'} rating={5} reviewCount={99} />
        <Card  img1={img4} name='IPS LCD Gaming Monitor' np={370} op={400} dis={'-30%'} rating={5} reviewCount={99} /> */}

        </div>
        <Category />
        <BestSale />
        <Music/>
        <Product />
        <NewArrival/>
        {/* <Counter /> */}
      </Container>
    </div>
  )
}

export default Home