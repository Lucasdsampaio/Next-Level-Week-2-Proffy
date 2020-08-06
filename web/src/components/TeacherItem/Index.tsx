import React from 'react'
import "./styles.css"
import whatsappIcon from '../../assests/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/28406397?s=460&u=56801808281dddc1866fe4961fb6dbe6422a38df&v=4" alt="Lucas" />
                <div>
                    <strong>Lucas Sampaio</strong>
                    <span>Python</span>
                </div>
            </header>

            <p>
                Nada
            <br></br>
            </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="contato" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem
