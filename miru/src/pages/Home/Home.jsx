import'./home.css'
import { AiOutlineHome } from 'react-icons/ai'
import FeatureCard from '../../components/featurecard/FeatureCard'

function Home() {
  return (
    <div className='home-container'>
      <div className='page-head'>
        <AiOutlineHome/>
        <div className='page-head-txt'>Home</div>  
      </div>
      <div className='homenavigations'>
        <FeatureCard to={"/itinerary"} src={"https://i.pinimg.com/originals/02/41/4e/02414eedd798edb346e7e7c3859422ce.jpg"} featureName="Itinerary"/>
        <FeatureCard to={"/currencyexchange"} src={"https://images.fineartamerica.com/images/artworkimages/medium/2/japanese-temple-beautiful-day-armand-michel.jpg"} featureName="Currency Converter"/>
        <FeatureCard to={"/translation"} src={"https://1.bp.blogspot.com/-7oqUazZcOGs/YEcfFf1el6I/AAAAAAAAKoc/jutfrK6E4fQ5uT7MOACfDcg7lZWHjOavQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Temple%2B%2528Anime%2BBackground%2529%2B009.jpg"} featureName="Quick Translations"/>
        <FeatureCard to={"/dorminformation"} src={"https://img.freepik.com/free-vector/set-torii-gates-water_52683-44986.jpg?w=2000"} featureName="Dorm Information"/>
        <FeatureCard to={"/emergencycontacts"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4ZoCkdmw9t_teRJ5i_dcoqtHUJXcrED3Nw&usqp=CAU"} featureName="Emergency Contacts"/>
      </div>
      
    </div>
  )
}

export default Home