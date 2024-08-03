import banner from '../assets/images/banner udemy.jpg'


function Banner(){
    return(
        <div class="banner">
            <img class="banner__image" src={banner} alt="banner"/>
            <div class="banner__image__offer">
                <h2>Udemy Flash Sale! 24 hours to save.</h2>
                <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn</p>
            </div>
        </div>
    )
}

export default Banner