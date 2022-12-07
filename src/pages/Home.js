import '../App.css'
import Contato from '../components/Home/Contato'
import Empreendimentos from '../components/Home/Empreendimentos'
import Footer from '../components/Home/Footer'
import Galeria from '../components/Home/Galeria'
import Header from '../components/Home/Header'
import MainSection from '../components/Home/MainSection'
import ProximoImovel from '../components/Home/ProximoImovel'
import QuemSomos from '../components/Home/QuemSomos'
import Reviews from '../components/Home/Reviews'
import Sinonimo from '../components/Home/Sinonimo'

export default function Home() {
    return (
        <div className='home'>
            <div className='first-bg'>
                <Header />
                <MainSection />
            </div>
            <div className='second-bg'>
                <QuemSomos />
            </div>
            <Empreendimentos />
            <div className='third-bg'>
                <Galeria />
            </div>
            <Sinonimo />
            <ProximoImovel />
            <Reviews />
            <div className='fith-bg'>
            <Contato />
            </div>
            <Footer />
        </div>
    )
}