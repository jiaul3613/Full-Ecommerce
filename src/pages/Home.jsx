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





const Home = () => {
  return (
    <div>
      <Container>
        <Hero />
        <Today />

        <div className=" flex gap-5">
        <Card  img1={img1} name='HAVIT HV-G92 Gamepad' np={120} op={160} dis={'-40%'} rating={5} reviewCount={88} />
        <Card  img1={img2} name='AK-900 Wired Keyboard' np={960} op={1160} dis={'-35%'} rating={4.5} reviewCount={75} />
        <Card  img1={img3} name='S-Series Comfort Chair' np={375} op={400} dis={'-20%'} rating={4.5} reviewCount={99} />
        <Card  img1={img4} name='IPS LCD Gaming Monitor' np={370} op={400} dis={'-30%'} rating={5} reviewCount={99} />
        <Card  img1={img4} name='IPS LCD Gaming Monitor' np={370} op={400} dis={'-30%'} rating={5} reviewCount={99} />
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