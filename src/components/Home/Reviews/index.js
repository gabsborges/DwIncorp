import './style.css'
import Carousel from 'react-elastic-carousel'
import { useRef } from 'react';

export default function Reviews() {

    const carouselRef = useRef(null);
    let resetTimeout;

    return (
        <div className='reviews'>
            <div className='fade-left'></div>
            <div className='fade-right'></div>
            <div id='reviews' className='reviews-area'>
                <h1>Reviews</h1>
                <div className='reviews-box'>
                    
                    <div className='reviews-carousel'>
                        <Carousel
                            enableMouseSwipe={false}
                            enableSwipe={false}
                            ref={carouselRef}
                            pagination={true}
                            showArrows={false}
                            autoPlaySpeed={4000}
                            isRTL={false}
                            onNextEnd={({ index }) => {
                                clearTimeout(resetTimeout);
                                resetTimeout = setTimeout(() => {
                                    carouselRef?.current?.goTo(0);
                                }, 4500); // same time
                            }}
                            enableAutoPlay={true}
                            itemsToScroll={2}
                            itemsToShow={3}
                        >
                            <div className='reviewsWrapper'>
        
                                <img src='./placeholder.png' alt='icone ' />
                                <div className='wrapperTexto'>
                                <h3>Nome tal</h3>
                                <p>Mais de 157 mil trabalhadores formais na região</p>
                                </div>
                            </div>
                            <div className='reviewsWrapper'>
        
                                <img src='./placeholder.png' alt='icone ' />
                                <div className='wrapperTexto'>
                                <h3>Nome tal</h3>
                                <p>Mais de 157 mil trabalhadores formais na região</p>
                                </div>
                            </div>
                            <div className='reviewsWrapper'>
        
                                <img src='./placeholder.png' alt='icone ' />
                                <div className='wrapperTexto'>
                                <h3>Nome tal</h3>
                                <p>Mais de 157 mil trabalhadores formais na região</p>
                                </div>
                            </div>
                            <div className='reviewsWrapper'>
        
                                <img src='./placeholder.png' alt='icone ' />
                                <div className='wrapperTexto'>
                                <h3>Nome tal</h3>
                                <p>Mais de 157 mil trabalhadores formais na região</p>
                                </div>
                            </div>
                            <div className='reviewsWrapper'>
        
                                <img src='./placeholder.png' alt='icone ' />
                                <div className='wrapperTexto'>
                                <h3>Nome tal</h3>
                                <p>Mais de 157 mil trabalhadores formais na região</p>
                                </div>
                            </div>
                            <div className='reviewsWrapper'>
        
                                <img src='./placeholder.png' alt='icone ' />
                                <div className='wrapperTexto'>
                                <h3>Nome tal</h3>
                                <p>Mais de 157 mil trabalhadores formais na região</p>
                                </div>
                            </div>
                            <div className='reviewsWrapper'>
        
                                <img src='./placeholder.png' alt='icone ' />
                                <div className='wrapperTexto'>
                                <h3>Nome tal</h3>
                                <p>Mais de 157 mil trabalhadores formais na região</p>
                                </div>
                            </div>
                            <div className='reviewsWrapper'>
        
                                <img src='./placeholder.png' alt='icone ' />
                                <div className='wrapperTexto'>
                                <h3>Nome tal</h3>
                                <p>Mais de 157 mil trabalhadores formais na região</p>
                                </div>
                            </div>
                            <div className='reviewsWrapper'>
        
                                <img src='./placeholder.png' alt='icone ' />
                                <div className='wrapperTexto'>
                                <h3>Nome tal</h3>
                                <p>Mais de 157 mil trabalhadores formais na região</p>
                                </div>
                            </div>
                            <div className='reviewsWrapper'>
        
                                <img src='./placeholder.png' alt='icone ' />
                                <div className='wrapperTexto'>
                                <h3>Nome tal</h3>
                                <p>Mais de 157 mil trabalhadores formais na região</p>
                                </div>
                            </div>
                            <div className='reviewsWrapper'>
        
                                <img src='./placeholder.png' alt='icone ' />
                                <div className='wrapperTexto'>
                                <h3>Nome tal</h3>
                                <p>Mais de 157 mil trabalhadores formais na região</p>
                                </div>
                            </div>
                            
                        </Carousel>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}