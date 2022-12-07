import './style.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-area'>
                <div className='footer-logo'>
                    <img src='./logo-dw.png' alt='Logo alternativa da DW Incorp' />
                    <p>orem ipsum dolorsitamet,consecteturadipiscingelit,seddo
                        eiusmodtemporincididuntutlaboreetdoloremagnaaliqua.
                        Quisipsum.</p>
                </div>
                <div className='footer-centraVendas'>
                    <h1>Central de Vendas</h1>
                    <p><i class="fa-brands fa-whatsapp"></i> (11) 95186-7047</p>
                    <p><i class="fa-regular fa-envelope"></i> contato@dwincorp.com.br</p>
                </div>
                <div className='footer-enderecos'>
                    <h1>Nossos endereços</h1>
                    <p>Rua Bartolomeu de Gusmão, 290 Vila Mariana<br/>São Paulo | SP - CEP: 04111-020</p>
                    <p>Avenída Ibirapuera, 1753 | 12º andar indianópolis<br/>São Paulo | SP</p>
                </div>
            </div>
        </footer>
    )
}