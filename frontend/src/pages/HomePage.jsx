import Container from 'react-bootstrap/Container';
import "./styles/HomePage.css"
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import HomePageSlider from "../components/HomePageSlider";
import LatestCauses from '../components/LatestCauses';
import AnimatedSection from '../components/AnimatedSection';



const HomePage = () => {

    
    return ( 
        <>
        <HeroSection />        
        <AnimatedSection/>
        <div
            style={{
              fontSize: '2.6rem',
              fontFamily: "'Arial', sans-serif",
              fontWeight: 'bold',
              color: 'Black',
              marginBottom: '1rem',
              marginTop: '3rem',
              textAlign: 'center'
          }}
        >
          Categories
        </div>
         <CategoriesSection/>
         <HomePageSlider/>
         <div 
            style={{
            fontSize: '2.6rem',
            fontFamily: "'Arial', sans-serif",
            fontWeight: 'bold',
            color: 'Black',
            marginBottom: '1rem',
            marginTop: '3rem',
            textAlign: 'start',
            marginLeft: '2rem'
            }}
         >
            Latest Cases
        </div>
        <LatestCauses/>
        </>
     );
}
 
export default HomePage;


