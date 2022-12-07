import './style.css'

export default function Empreendimentos() {
    return (
        <div className='empreendimento'>
                        <div className='fade-left'></div>
            <div className='fade-right'></div>
            <div id='empreendimentos' className='empreendimento-area'>
                <h1>Empreendimentos</h1>
                <p>Conheça nossos modelos</p>
                <div className="cards">
                <div className='card-inner'>
                    <img alt='' src='./diy-belavista.png' />
                    <div className='card-inner-text'>
                        <div className='card-inner-box'>
                            <div className='card-box-texto'>
                                <h1>DIY BELA VISTA</h1>
                                <p>UNITY ENGENHARIA</p>
                            </div>
                            <div className='card-box-icone'>
                                <i id='bookmark' className="fa-regular fa-bookmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-inner underConstruction'>
                    <img alt='' src='./ahead-aclimacao.png' />
                    <div className='card-inner-text'>
                        <div className='card-inner-box'>
                            <div className='card-box-texto'>
                                <h1>AHEAD ACLIMAÇÃO</h1>
                                <p>DW INCORP</p>
                            </div>
                            <div className='card-box-icone'>
                                <i id='bookmark' className="fa-regular fa-bookmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-inner'>
                    <img alt='' src='./alive-vila-mariana.png' />
                    <div className='card-inner-text'>
                        <div className='card-inner-box'>
                            <div className='card-box-texto'>
                                <h1>ALIVE VILA MARIANA</h1>
                                <p>DW INCORP</p>
                            </div>
                            <div className='card-box-icone'>
                                <i id='bookmark' className="fa-regular fa-bookmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-inner underConstruction'>
                    <img alt='' src='./alto-da-boa-vista.png' />
                    <div className='card-inner-text'>
                        <div className='card-inner-box'>
                            <div className='card-box-texto'>
                                <h1>EB500</h1>
                                <p>DW INCORP</p>
                            </div>
                            <div className='card-box-icone'>
                                <i id='bookmark' className="fa-regular fa-bookmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}