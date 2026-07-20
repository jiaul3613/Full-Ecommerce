
import Container from './Container';
//import TestCarousel from './SlickCarousel';
import heroimg from '../assets/heroimg.png'


const Hero = () => {
  return (
    <div>
        <Container>
            <div className='flex '>
                <div className='w-[20%] border-r border-zinc-600 pt-5 pb-2'>
                    <ul className='flex flex-col gap-y-3 text-sm text-black leading-loose font-poppins font-[16px]'>
                        <li>Woman’s Fashion</li>
                        <li>Men’s Fashion</li>
                        <li>Electronics</li>
                        <li>Home & Lifestyle</li>
                        <li>Medicine</li>
                        <li>Sports & Outdoor</li>
                        <li>Health & Beauty</li>
                        <li>Groceries &</li>
                    </ul>
                </div>
                <div className='w-[80%]'>
                    {/* <TestCarousel /> */}
                    <img className='w-223 h-86 pl-10 mt-10 ' src={heroimg} alt="" />
                   
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Hero