import { useState } from 'react'
import './style.css'

export default function Header() {

    const [sobre, setSobre] = useState('')
    const [quemSomos, setQuemSomos] = useState('')
    const [empreendimentos, setEmpreendimentos] = useState('')
    const [galeria, setGaleria] = useState('')
    const [reviews, setReviews] = useState('')

    function changeMenuSobre() {
        setSobre('activeBar')
        setQuemSomos('')
        setEmpreendimentos('')
        setGaleria('')
        setReviews('')
    }

    function changeMenuQuemSomos() {
        setSobre('')
        setQuemSomos('activeBar')
        setEmpreendimentos('')
        setGaleria('')
        setReviews('')
    }

    function changeMenuEmpreendimentos() {
        setSobre('')
        setQuemSomos('')
        setEmpreendimentos('activeBar')
        setGaleria('')
        setReviews('')
    }

    function changeMenuGaleria() {
        setSobre('')
        setQuemSomos('')
        setEmpreendimentos('')
        setGaleria('activeBar')
        setReviews('')
    }

    function changeMenuReviews() {
        setSobre('')
        setQuemSomos('')
        setEmpreendimentos('')
        setGaleria('')
        setReviews('activeBar')
    }

    return (
        <header className='header'>
            <div className='header-area'>
                <img src='./logo-dw-1.png' alt='Logo da DW Incorp'/>
                <div className='header-menu'>
                    <ul>
                        <li><a href='#sobre' className={sobre} onClick={changeMenuSobre}>sobre</a></li>
                        <li><a href='#quemSomos' className={quemSomos} onClick={changeMenuQuemSomos}>quem somos</a></li>
                        <li><a href='#empreendimentos' className={empreendimentos} onClick={changeMenuEmpreendimentos}>empreendimentos</a></li>
                        <li><a href='#galeria' className={galeria} onClick={changeMenuGaleria}>galeria</a></li>
                        <li><a href='#reviews' className={reviews} onClick={changeMenuReviews}>reviews</a></li>
                    </ul>
                </div>
                <div className='header-contato'>
                    <a href='#contato'>entrar em contato</a>
                </div>
            </div>
        </header>
    )
}