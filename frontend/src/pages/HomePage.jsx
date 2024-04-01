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
        <div style={{fontWeight:"bold", textAlign:"center", fontSize:"35px", fontFamily:"cursive"}}>Categories</div>
         <CategoriesSection/>
         <HomePageSlider/>
         <div style={{fontWeight:"bold",fontSize:"35px", fontFamily:"cursive", margin:"10px"}}>Latest Cases</div>
        <LatestCauses/>
        </>
     );
}
 
export default HomePage;


