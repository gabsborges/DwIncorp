import './style.css'

export default function Contato() {
    return (
        <div className='contato'>
            <div id='contato'  className='contato-area'>
                <div className='contato-form'>
                    <h1>Fale com nosso corretor.</h1>
                    <form id="llCaptureForm" className="llform001" action="//paginas.rocks/capture" method="post">
                        <input type="hidden" id="mid" name="mid" value="672331" />
                        <input type="hidden" id="fid" name="fid" value="55458" />
                        <input type="hidden" id="formType" name="formType" value="dynamic" />
                        <div>
                            
                            <input type="text" id="llfield69862" name="llfield69862" placeholder="nome:" data-required="true" />
                            <div className="field-error" id="llerror69862"></div>
                        </div>
                        <div>
                            
                            <input type="tel" id="llfield69864" name="llfield69864" placeholder="celular:" data-required="true" />
                            <div className="field-error" id="llerror69864"></div>
                        </div>
                        <div>
                            
                            <input type="email" id="llfield69863" name="llfield69863" placeholder="e-mail:" data-required="true" />
                            <div className="field-error" id="llerror69863"></div>
                        </div>

                        <div>
                            <div className="field-error" id="LGPDValidation"></div>
                            <div className="checkbox-list" data-required="true" >
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" id="LGPDValidation" name="LGPDValidation" style={{"-webkit-appearance": "auto"}} value="1" /> Autorizo o contato via e-mail, celular ou WhatsApp da equipe Rinobox para, exclusivamente, receber informações sobre a empresa.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="button-bar">
                            <button type="submit">Entrar em contato</button>
                        </div>
                        <div className="loading-box" style={{"display": "none"}}>
                            <img src="//paginas.rocks/content/images/spinner.gif"/>
                            <div>loading...</div>
                        </div>
                        <div className="error-box" style={{"display": "none"}}>
                            <img src="//paginas.rocks/content/images/error-icon.png" />
                            <div></div>
                            <button type="button" className="btn" id="btn-error">Ok</button>
                        </div>
                        <img src="https://llimages.com/redirect/redirect.aspx?A=V&f=55458&m=672331" style={{"display": "none"}} />
                    </form>
                </div>
            </div>
        </div>
    )
}