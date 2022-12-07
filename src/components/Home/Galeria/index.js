import './style.css'
import { useState } from 'react';
import Carousel from 'react-elastic-carousel'


export default function Galeria() {

    const [show, setShow] = useState("modalBox disable");
    const [image, setImage] = useState("./UNIT-BELA-VISTA_BIKE_SHARE.png");
    const [image2, setImage2] = useState("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
    const [image3, setImage3] = useState("./UNIT-BELA-VISTA_COWORK.png");
    const [image4, setImage4] = useState("./UNIT-BELA-VISTA_LAVANDERIA.png");
    const [image5, setImage5] = useState("./UNIT-BELA-VISTA_LOBBY.png");
    const [image6, setImage6] = useState("./UNIT-BELA-VISTA_PeT_2 TIRO.jpg");
    const [image7, setImage7] = useState("./UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg");
    const [image8, setImage8] = useState("./UNIT-BELA-VISTA_BIKE_SHARE.png");
    const [image9, setImage9] = useState("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
    const [image10, setImage10] = useState("./UNIT-BELA-VISTA_COWORK.png");


    function handleShow() {
        if (show == "modalBox disable") {
            setShow("modalBox")
            setImage("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage2("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage3("./UNIT-BELA-VISTA_COWORK.png");
            setImage4("./UNIT-BELA-VISTA_LAVANDERIA.png");
            setImage5("./UNIT-BELA-VISTA_LOBBY.png");
            setImage6("./UNIT-BELA-VISTA_PeT_2 TIRO.jpg");
            setImage7("./UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg");
            setImage8("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage9("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage10("./UNIT-BELA-VISTA_COWORK.png");
        } else {
            setShow("modalBox disable")
        }
    }

    function handleShow2() {
        if (show == "modalBox disable") {
            setShow("modalBox")
            setImage("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage2("./UNIT-BELA-VISTA_COWORK.png");
            setImage3("./UNIT-BELA-VISTA_LAVANDERIA.png");
            setImage4("./UNIT-BELA-VISTA_LOBBY.png");
            setImage5("./UNIT-BELA-VISTA_PeT_2 TIRO.jpg");
            setImage6("./UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg");
            setImage7("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage8("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage9("./UNIT-BELA-VISTA_COWORK.png");
            setImage10("./UNIT-BELA-VISTA_BIKE_SHARE.png");
        } else {
            setShow("modalBox disable")
        }
    }

    function handleShow3() {
        if (show == "modalBox disable") {
            setShow("modalBox")
            setImage("./UNIT-BELA-VISTA_COWORK.png");
            setImage2("./UNIT-BELA-VISTA_LAVANDERIA.png");
            setImage3("./UNIT-BELA-VISTA_LOBBY.png");
            setImage4("./UNIT-BELA-VISTA_PeT_2 TIRO.jpg");
            setImage5("./UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg");
            setImage6("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage7("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage8("./UNIT-BELA-VISTA_COWORK.png");
            setImage9("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage10("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
        } else {
            setShow("modalBox disable")
        }
    }

    function handleShow4() {
        if (show == "modalBox disable") {
            setShow("modalBox")
            setImage("./UNIT-BELA-VISTA_LAVANDERIA.png");
            setImage2("./UNIT-BELA-VISTA_LOBBY.png");
            setImage3("./UNIT-BELA-VISTA_PeT_2 TIRO.jpg");
            setImage4("./UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg");
            setImage5("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage6("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage7("./UNIT-BELA-VISTA_COWORK.png");
            setImage8("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage9("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage10("./UNIT-BELA-VISTA_COWORK.png");
        } else {
            setShow("modalBox disable")
        }
    }

    function handleShow5() {
        if (show == "modalBox disable") {
            setShow("modalBox")
            setImage("./UNIT-BELA-VISTA_LOBBY.png");
            setImage2("./UNIT-BELA-VISTA_PeT_2 TIRO.jpg");
            setImage3("./UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg");
            setImage4("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage5("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage6("./UNIT-BELA-VISTA_COWORK.png");
            setImage7("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage8("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage9("./UNIT-BELA-VISTA_COWORK.png");
            setImage10("./UNIT-BELA-VISTA_LAVANDERIA.png");
        } else {
            setShow("modalBox disable")
        }
    }

    function handleShow6() {
        if (show == "modalBox disable") {
            setShow("modalBox")
            setImage("./UNIT-BELA-VISTA_PeT_2 TIRO.jpg");
            setImage2("./UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg");
            setImage3("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage4("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage5("./UNIT-BELA-VISTA_COWORK.png");
            setImage6("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage7("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage8("./UNIT-BELA-VISTA_COWORK.png");
            setImage9("./UNIT-BELA-VISTA_LAVANDERIA.png");
            setImage10("./UNIT-BELA-VISTA_LOBBY.png");
        } else {
            setShow("modalBox disable")
        }
    }

    function handleShow7() {
        if (show == "modalBox disable") {
            setShow("modalBox")
            setImage("./UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg");
            setImage2("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage3("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage4("./UNIT-BELA-VISTA_COWORK.png");
            setImage5("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage6("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage7("./UNIT-BELA-VISTA_COWORK.png");
            setImage8("./UNIT-BELA-VISTA_LAVANDERIA.png");
            setImage9("./UNIT-BELA-VISTA_LOBBY.png");
            setImage10("./UNIT-BELA-VISTA_PeT_2 TIRO.jpg");
        } else {
            setShow("modalBox disable")
        }
    }

    function handleShow8() {
        if (show == "modalBox disable") {
            setShow("modalBox")
            setImage("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage2("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage3("./UNIT-BELA-VISTA_COWORK.png");
            setImage4("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage5("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage6("./UNIT-BELA-VISTA_COWORK.png");
            setImage7("./UNIT-BELA-VISTA_LAVANDERIA.png");
            setImage8("./UNIT-BELA-VISTA_LOBBY.png");
            setImage9("./UNIT-BELA-VISTA_PeT_2 TIRO.jpg");
            setImage10("./UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg");
        } else {
            setShow("modalBox disable")
        }
    }

    function handleShow9() {
        if (show == "modalBox disable") {
            setShow("modalBox")
            setImage("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage2("./UNIT-BELA-VISTA_COWORK.png");
            setImage3("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage4("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage5("./UNIT-BELA-VISTA_COWORK.png");
            setImage6("./UNIT-BELA-VISTA_LAVANDERIA.png");
            setImage7("./UNIT-BELA-VISTA_LOBBY.png");
            setImage8("./UNIT-BELA-VISTA_PeT_2 TIRO.jpg");
            setImage9("./UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg");
            setImage10("./UNIT-BELA-VISTA_BIKE_SHARE.png");
        } else {
            setShow("modalBox disable")
        }
    }

    function handleShow10() {
        if (show == "modalBox disable") {
            setShow("modalBox")
            setImage("./UNIT-BELA-VISTA_COWORK.png");
            setImage2("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage3("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
            setImage4("./UNIT-BELA-VISTA_COWORK.png");
            setImage5("./UNIT-BELA-VISTA_LAVANDERIA.png");
            setImage6("./UNIT-BELA-VISTA_LOBBY.png");
            setImage7("./UNIT-BELA-VISTA_PeT_2 TIRO.jpg");
            setImage8("./UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg");
            setImage9("./UNIT-BELA-VISTA_BIKE_SHARE.png");
            setImage10("./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg");
        } else {
            setShow("modalBox disable")
        }
    }


    return (
        <div className='galeria'>
            <div id='galeria' className='galeria-area'>
                <h1>Reviews</h1>
                <div className={show}>
                    <i className="fa-solid fa-xmark" onClick={handleShow}></i>
                    <Carousel>
                    <img src={image} alt='teste' />
                    <img src={image2} alt='teste' />
                    <img src={image3} alt='teste' />
                    <img src={image4} alt='teste' />
                    <img src={image5} alt='teste' />
                    <img src={image6} alt='teste' />
                    <img src={image7} alt='teste' />
                    <img src={image8} alt='teste' />
                    <img src={image9} alt='teste' />
                    <img src={image10} alt='teste' />
                    </Carousel>
                </div>
                <div className="parent">
                    <div className='cardWrapper' onClick={handleShow}>
                        <div id='card' className='photo1'><img src='./UNIT-BELA-VISTA_BIKE_SHARE.png' alt='teste' />

                        </div>

                    </div>
                    <div className='cardWrapper' onClick={handleShow2}>
                        <div id='card' className='photo1'><img src='./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg' alt='teste' />

                        </div>

                    </div>
                    <div className='cardWrapper' onClick={handleShow3}>
                        <div id='card' className='photo1'><img src='./UNIT-BELA-VISTA_COWORK.png' alt='teste' />
                        </div>

                    </div>
                    <div className='cardWrapper' onClick={handleShow4}>
                        <div id='card' className='photo1'><img src='./UNIT-BELA-VISTA_LAVANDERIA.png' alt='teste' />
                        </div>

                    </div>
                    <div className='cardWrapper' onClick={handleShow5}>
                        <div id='card' className='photo1'><img src='./UNIT-BELA-VISTA_LOBBY.png' alt='teste' />
                        </div>

                    </div>
                    <div className='cardWrapper' onClick={handleShow6}>
                        <div id='card' className='photo1'><img src='./UNIT-BELA-VISTA_PeT_2 TIRO.jpg' alt='teste' />
                        </div>

                    </div>
                    <div className='cardWrapper' onClick={handleShow7}>
                        <div id='card' className='photo1'><img src='./UNIT-BELA-VISTA_PISCINA_1 TIRO.jpg' alt='teste' />
                        </div>

                    </div>
                    <div className='cardWrapper' onClick={handleShow8}>
                        <div id='card' className='photo1'><img src='./UNIT-BELA-VISTA_BIKE_SHARE.png' alt='teste' />
                        </div>

                    </div>
                    <div className='cardWrapper' onClick={handleShow9}>
                        <div id='card' className='photo1'><img src='./UNIT-BELA-VISTA_CHURRAS_2 TIRO.jpg' alt='teste' />
                        </div>

                    </div>
                    <div className='cardWrapper' onClick={handleShow10}>
                        <div id='card' className='photo1'><img src='./UNIT-BELA-VISTA_COWORK.png' alt='teste' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}