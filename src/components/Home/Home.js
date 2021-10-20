import BlogsSection from "../BlogsSection/BlogsSection"
import DoctorsSection from "../DoctorsSection/DoctorsSection"
import Download from "../Download/Download"
import Health from "../Health/Health"
import Hero from "../Hero/Hero"
import ServicesSection from "../ServicesSection/ServicesSection"

const Home = () => {
    return (
        <>
         <Hero />
         <ServicesSection />
         <Health />
         <DoctorsSection />
         <BlogsSection />
         <Download />
        </>
    )
}

export default Home
