//importing course images

import course1 from '../assets/images/coursecard-1.jpg'
import course2 from '../assets/images/coursecard-2.jpg'
import course3 from '../assets/images/coursecard-3.jpg'
import course4 from '../assets/images/coursecard-4.jpg'


function Recomend(){
    return(
        <div class="recommended">
            <h1 class="recommended__title">Recommended for you</h1>
            <p>Pick the best fit...</p>
            <div class="recommended__container">
                <div class="course-card">
                    <img src={course1} alt="course1"/>
                    <h2>2024 Python for Data visualization</h2>
                    <p>Angela YU</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={course2} alt="course2"/>
                    <h2>UI UX Design 2024 Masterclass</h2>
                    <p>Steve Joseph</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>599 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={course3} alt="course3"/>
                    <h2>Web development Bootcamp 2024</h2>
                    <p>Rick Martin</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={course4} alt="course4"/>
                    <h2>Business Intelligence Bootcamp</h2>
                    <p>Elizabeth Lisa</p>
                    <p>3.8 ⭐⭐⭐</p>
                    <p>Rs 499 <del>1999</del></p>
                </div>
                
            </div>
        </div>
    )
}

export default Recomend