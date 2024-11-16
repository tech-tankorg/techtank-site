import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from "next/image";
import Link from 'next/link';

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className='aboutUs m-auto md:w-[90%] w-full pb-6'>
        <div className='md:flex md:flex-col grid grid-cols-2 grid-rows-1'>
          <div className='md:m-auto ml-10 mr-36 leading-8 font-light text-lg'>
            <h2 className='text-4xl my-6'>About Us</h2>
            <p className='mb-4'>
              TechTank is a lively and inclusive tech community where we
              wholeheartedly embrace tech enthusiasts from all walks of life.
              Whether you&apos;re a seasoned coding expert, a budding tech
              entrepreneur, or simply someone with a passion for the digital
              world, you&apos;re welcome here. 🚀
            </p>
            <p className='mb-4'>
              Whether you&apos;re a tech pro or just starting your journey,
              we&apos;ve got you covered with coding workshops, study sessions,
              and tech discussions. Plus, we host a variety of fun and social
              events where you can make new friends. 🤓💻{' '}
            </p>
            <p className='mb-4'>
              At TechTank, we celebrate our diverse tech community, showing that
              great things happen when different backgrounds come together! 💪🌍
            </p>
            <p className='mb-4'>
              We&apos;re about the amazing people behind the tech. Join us in
              this journey of learning and innovation! 🚀💡
            </p>
            <p>Welcome to the Tank! Hope you have a great swim 🐟</p>
            <Link href={''}>
              <div className='btn my-8'>
                <p>Join Us</p>
              </div>
            </Link>
          </div>
          <div className='bg-red-500 relative md:aspect-video aspect-auto md:order-first'>
            <Image src='/about.jpeg' alt='About Us' style={{ objectFit: "cover", objectPosition: "center" }} fill/>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default AboutUs
