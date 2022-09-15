import logo from './logo.svg';
import './App.css';
import "./sass/main.scss";

function App() {
  return (
    <div className="">
      <div className='container'>
        <div className='sidebar'>
          <button className='nav-btn'></button>
        </div>

        <header className='header'>
          <img src='img/logo.png' alt='nexter logo' className='header__logo'></img>
          <h3 className='heading-3'>Your own home:</h3>
          <h1 className='heading-1'>The ultimate freedom</h1>
          <button className='btn header__btn'>View our properties</button>
          <div className='header__seenon-text'>Seen on</div>
          <div className='header__seenon-logos'>
            <img src='img/logo-bbc.png' alt='Seen on logo 1'></img>
            <img src='img/logo-forbes.png' alt='Seen on logo 2'></img>
            <img src='img/logo-techcrunch.png' alt='Seen on logo 3'></img>
            <img src='img/logo-bi.png' alt='Seen on logo 4'></img>
          </div>
        </header>

        <div className='realtors'>
          <h3 className='heading-3'>Top 3 Realtors</h3>
          <div className='realtors__list'>
            <img src='img/realtor-1.jpeg' alt='realtor 1' className='realtors__img'></img>
            <div className='realtors__details'>
              <h4  className='heading-4 heading-4--light'>Erik fann</h4>
              <p className='realtors__sold'>345 house sold</p>
            </div>

            <img src='img/realtor-2.jpeg' alt='realtor 1' className='realtors__img'></img>
            <div className='realtors__details'>
              <h4  className='heading-4 heading-4--light'>Kim Brown</h4>
              <p className='realtors__sold'>212 house sold</p>
            </div>
            <img src='img/realtor-3.jpeg' alt='realtor 1' className='realtors__img'></img>
            <div className='realtors__details'>
              <h4  className='heading-4 heading-4--light'>Shola Uzo</h4>
              <p className='realtors__sold'>300 house sold</p>
            </div>
            





          </div>
        </div>

        <section className='features'>
          <div className='feature'>
            <svg className='feature__icon'>
              <use xlinkHref='img/sprite.svg#icon-global'></use>
            </svg>
            <h4 className='heading-4 heading-4--dark'>World's best luxury homes</h4>
            <p className='feature__text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div className='feature'>
            <svg className='feature__icon'>
              <use xlinkHref='img/sprite.svg#icon-trophy'></use>
            </svg>
            <h4 className='heading-4 heading-4--dark'>Only the best of properties</h4>
            <p className='feature__text'>
              Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.
            </p>
          </div>
          <div className='feature'>
            <svg className='feature__icon'>
              <use xlinkHref='img/sprite.svg#icon-map-pin'></use>
            </svg>
            <h4 className='heading-4 heading-4--dark'>All homes in top locations</h4>
            <p className='feature__text'>
              Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.
            </p>
          </div>
          <div className='feature'>
            <svg className='feature__icon'>
              <use xlinkHref='img/sprite.svg#icon-key'></use>
            </svg>
            <h4 className='heading-4 heading-4--dark'>New home in one week</h4>
            <p className='feature__text'>
              Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className='feature'>
            <svg className='feature__icon'>
              <use xlinkHref='img/sprite.svg#icon-presentation'></use>
            </svg>
            <h4 className='heading-4 heading-4--dark'>Top 1% realtors</h4>
            <p className='feature__text'>
              Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div className='feature'>
            <svg className='feature__icon'>
              <use xlinkHref='img/sprite.svg#icon-lock'></use>
            </svg>
            <h4 className='heading-4'>Secure payments on nexter</h4>
            <p className='feature__text'>
              Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
            </p>
          </div>
        </section>
{/* 
        <section className='testing'>

        </section> */}

        <div className='story__pictures'>
       <img src='img/story-1.jpeg' alt='couple' className='story__img--1'></img>
       <img src='img/story-2.jpeg' alt='couple' className='story__img--2'></img>
        </div>


        <div className='story__content'>
          <h3 className='heading-3 mb-sm'>Happy Customers</h3>
          <h2 className='heading-2 heading-2--dark mb-md'>&ldquo;The best decision of our lives&rdquo;</h2>
          <p className='story__text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
          </p>
          <button className='btn'>Find your own Home</button>
        </div>

        <section className='homes'>
          <div className='home'>
            <img src='img/house-1.jpeg' alt='House 1' className='home__img'></img>
            <svg className='home__like'>
              <use xlinkHref='img/sprite.svg#icon-heart-full'></use>
            </svg>
            <h5 className='home__name'>Beautiful Family House</h5>
            <div className='home__location'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-map-pin'></use>
            </svg>
            <p>USA</p>
            </div>
            <div className='home__rooms'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-profile-male'></use>
            </svg>
            <p>5 rooms</p>
            </div>
            <div className='home__area'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-icon-expand'></use>
            </svg>
            <p>325 m<sup>2</sup></p>
            </div>
            <div className='home__price'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-key'></use>
            </svg>
            <p>$1,200,000</p>
            </div>
            <button className='btn home__btn'>Contact realtor</button>
          </div>
          <div className='home'>
            <img src='img/house-2.jpeg' alt='House 2' className='home__img'></img>
            <svg className='home__like'>
              <use xlinkHref='img/sprite.svg#icon-heart-full'></use>
            </svg>
            <h5 className='home__name'>Modern Glass House</h5>
            <div className='home__location'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-map-pin'></use>
            </svg>
            <p>Canada</p>
            </div>
            <div className='home__rooms'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-profile-male'></use>
            </svg>
            <p>6 rooms</p>
            </div>
            <div className='home__area'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-icon-expand'></use>
            </svg>
            <p>450 m<sup>2</sup></p>
            </div>
            <div className='home__price'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-key'></use>
            </svg>
            <p>$2,750,000</p>
            </div>
            <button className='btn home__btn'>Contact realtor</button>
          </div>
          <div className='home'>
            <img src='img/house-3.jpeg' alt='House 3' className='home__img'></img>
            <svg className='home__like'>
              <use xlinkHref='img/sprite.svg#icon-heart-full'></use>
            </svg>
            <h5 className='home__name'>Cozy county house</h5>
            <div className='home__location'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-map-pin'></use>
            </svg>
            <p>Uk</p>
            </div>
            <div className='home__rooms'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-profile-male'></use>
            </svg>
            <p>4 rooms</p>
            </div>
            <div className='home__area'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-icon-expand'></use>
            </svg>
            <p>250 m<sup>2</sup></p>
            </div>
            <div className='home__price'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-key'></use>
            </svg>
            <p>850,000</p>
            </div>
            <button className='btn home__btn'>Contact realtor</button>
          </div>
          <div className='home'>
            <img src='img/house-4.jpeg' alt='House 4' className='home__img'></img>
            <svg className='home__like'>
              <use xlinkHref='img/sprite.svg#icon-heart-full'></use>
            </svg>
            <h5 className='home__name'>Large Rustical villa</h5>
            <div className='home__location'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-map-pin'></use>
            </svg>
            <p>Portugal</p>
            </div>
            <div className='home__rooms'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-profile-male'></use>
            </svg>
            <p>6 rooms</p>
            </div>
            <div className='home__area'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-icon-expand'></use>
            </svg>
            <p>480 m<sup>2</sup></p>
            </div>
            <div className='home__price'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-key'></use>
            </svg>
            <p>$1,950,000</p>
            </div>
            <button className='btn home__btn'>Contact realtor</button>
          </div>
          <div className='home'>
            <img src='img/house-5.jpeg' alt='House 5' className='home__img'></img>
            <svg className='home__like'>
              <use xlinkHref='img/sprite.svg#icon-heart-full'></use>
            </svg>
            <h5 className='home__name'>Majestic Palace House</h5>
            <div className='home__location'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-map-pin'></use>
            </svg>
            <p>Germany</p>
            </div>
            <div className='home__rooms'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-profile-male'></use>
            </svg>
            <p>18 rooms</p>
            </div>
            <div className='home__area'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-icon-expand'></use>
            </svg>
            <p>4230 m<sup>2</sup></p>
            </div>
            <div className='home__price'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-key'></use>
            </svg>
            <p>$9,500,000</p>
            </div>
            <button className='btn home__btn'>Contact realtor</button>
          </div>
          <div className='home'>
            <img src='img/house-6.jpeg' alt='House 6' className='home__img'></img>
            <svg className='home__like'>
              <use xlinkHref='img/sprite.svg#icon-heart-full'></use>
            </svg>
            <h5 className='home__name'>Modern Family Apartments</h5>
            <div className='home__location'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-map-pin'></use>
            </svg>
            <p>Italy</p>
            </div>
            <div className='home__rooms'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-profile-male'></use>
            </svg>
            <p>3 rooms</p>
            </div>
            <div className='home__area'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-icon-expand'></use>
            </svg>
            <p>180 m<sup>2</sup></p>
            </div>
            <div className='home__price'>
            <svg >
              <use xlinkHref='img/sprite.svg#icon-key'></use>
            </svg>
            <p>$600,000</p>
            </div>
            <button className='btn home__btn'>Contact realtor</button>
          </div>


        </section>


        <section className='gallery'>

          
          <figure className='gallery__item gallery__item--1'>
          <img src='img/gal-1.jpeg' alt='gallery image 1' className='gallery__img'></img></figure>
          <figure className='gallery__item gallery__item--2'>
          <img src='img/gal-2.jpeg' alt='gallery image 1' className='gallery__img'></img></figure>
          <figure className='gallery__item gallery__item--3'>
          <img src='img/gal-3.jpeg' alt='gallery image 1' className='gallery__img'></img></figure>
          <figure className='gallery__item gallery__item--4'>
          <img src='img/gal-4.jpeg' alt='gallery image 1' className='gallery__img'></img></figure>
          <figure className='gallery__item gallery__item--5'>
          <img src='img/gal-5.jpeg' alt='gallery image 1' className='gallery__img'></img></figure>
          <figure className='gallery__item gallery__item--6'>
          <img src='img/gal-6.jpeg' alt='gallery image 1' className='gallery__img'></img></figure>
          <figure className='gallery__item gallery__item--7'>
          <img src='img/gal-7.jpeg' alt='gallery image 1' className='gallery__img'></img></figure>
          <figure className='gallery__item gallery__item--8'>
          <img src='img/gal-8.jpeg' alt='gallery image 1' className='gallery__img'></img></figure>
          <figure className='gallery__item gallery__item--9'>
          <img src='img/gal-9.jpeg' alt='gallery image 1' className='gallery__img'></img></figure>
          <figure className='gallery__item gallery__item--10'>
          <img src='img/gal-10.jpeg' alt='gallery image 1' className='gallery__img'></img></figure>
          <figure className='gallery__item gallery__item--11'>
          <img src='img/gal-11.jpeg' alt='gallery image 1' className='gallery__img'></img></figure>
          <figure className='gallery__item gallery__item--12'>
          <img src='img/gal-12.jpeg' alt='gallery image 1' className='gallery__img'></img></figure>
          <figure className='gallery__item gallery__item--13'>
          <img src='img/gal-13.jpeg' alt='gallery image 1' className='gallery__img'></img></figure>
          <figure className='gallery__item gallery__item--14'>
          <img src='img/gal-14.jpeg' alt='gallery image 1' className='gallery__img'></img></figure>
     

        </section>

        <footer className='footer'>
          <ul className='nav'>
            <li className='nav__item'><a href='#' className='nav__link'>Find your dream home</a></li>
            <li className='nav__item'><a href='#' className='nav__link'>Request proposal</a></li>
            <li className='nav__item'><a href='#' className='nav__link'>Download home planner</a></li>
            <li className='nav__item'><a href='#' className='nav__link'>Contact Us</a></li>
            <li className='nav__item'><a href='#' className='nav__link'>Submit your property</a></li>
            <li className='nav__item'><a href='#' className='nav__link'>Come work with us!</a></li>
          </ul>
          <p className='copyright'>
            &copy; Copyright 2017 by Ogu Anthony. Feel free to use this project for your own purposes.
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;
