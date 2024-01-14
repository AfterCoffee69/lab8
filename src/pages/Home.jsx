import Footer from './../components/Footer'
import AboutUs from '../components/AboutUs';
import './../styles/home.css';

const Home = () => {
    return ( 
        <>
             <AboutUs/>
             <div className="features">
                <h2>Преимущества выбора нашей поликлиники</h2>
                <ul>
                    <li>Квалифицированный медицинский персонал</li>
                    <li>Широкий спектр медицинских услуг</li>
                    <li>Доступность и удобство</li>
                    <li>Современное оборудование</li>
                </ul>
            </div>
            <Footer/>
        </>
     );
}
 
export default Home;