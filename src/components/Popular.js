
import popular1 from '../assets/images/pop-1-web.jpg'
import popular2 from '../assets/images/pop-2-uiux.jpg'
import popular3 from '../assets/images/pop-3-busintel.jpg'
import popular4 from '../assets/images/pop-4-design.jpg'
import popular5 from '../assets/images/pop-5-commu.jpg'
import popular6 from '../assets/images/pop-6-interiordesign.jpg'
import popular7 from '../assets/images/pop-7-seo.jpg'
import popular8 from '../assets/images/pop-5-commu.jpg'

function Popular(){
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pick the best fir for you</p>
        
        <div class="popular__container">
            <div class="popular-card">
                <img src={popular1} alt="popular1"/>
                <h2>Web development Bootcamp</h2>
                <p>Angela YU</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>

            <div class="popular-card">
                <img src={popular2} alt="popular2"/>
                <h2>UI UX Designer Pro</h2>
                <p>Williams Joe</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>

            <div class="popular-card">
                <img src={popular3} alt="popular3"/>
                <h2>Business Intelligence 2024</h2>
                <p>Kemi Lisa</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>

            <div class="popular-card">
                <img src={popular4} alt="popular4"/>
                <h2>Graphic Designer Bootcamp</h2>
                <p>Andrew Tie</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>

            <div class="popular-card">
                <img src={popular5} alt="popular5"/>
                <h2>Communication Masterclass</h2>
                <p>Wille Smith</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>

            <div class="popular-card">
                <img src={popular6} alt="popular6"/>
                <h2>Learn Interior Designing</h2>
                <p>Alex</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>

            <div class="popular-card">
                <img src={popular7}alt="popular7"/>
                <h2>SEO Masterclass 2024</h2>
                <p>Stephanie John</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>

            <div class="popular-card">
                <img src={popular8} alt="popular8"/>
                <h2>Master in Public Speaking</h2>
                <p>Daniel Root</p> 
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
        </div>
     </div>
    )
}

export default Popular