import './style.css'

export default function MainSection() {
    return (
        <div className='mainSection'>
            <div className='mainSection-area'>
                <h1 id="sobre">O que não pode faltar<br/>no seu próximo imóvel?</h1>
                <p>Na <strong>DW Incorp</strong> você sempre encontra a opção que<br/>mais se encaixa nas suas necessidades.</p>
                <div className='mainSection-button'>
                    <a href='#'>mais detalhes <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
    )
}