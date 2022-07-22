import { Link } from 'react-router-dom';

import './App.css';

const App = () => {
    return(
        <section className="main">
            <div className="container">
                <div className="main__inner">
                    <img src="/assets/img/car.png" alt="Машина" className="main__inner--bg" />
                    
                    <div className="main__inner--wrapper">
                        <Link to='/' className="main__logo--inner">
                            <img src="/assets/img/logo.png" alt="Лого" className="img" />
                        </Link>

                        <div className="main__inner--box">
                            <nav className="main__inner--nav">
                                <Link to='/' className="main__inner--nav--link">
                                    Как мы работаем
                                </Link>

                                <Link to='/' className="main__inner--nav--link">
                                    Оставить заявку
                                </Link>

                                <Link to='/' className="main__inner--nav--link">
                                    О компании
                                </Link>

                                <Link to='/' className="main__inner--nav--link">
                                    Блог
                                </Link>

                                <Link to='/' className="main__inner--nav--link">
                                    Калькулятор
                                </Link>

                                <Link to='/' className="main__inner--nav--link">
                                    Контакты
                                </Link>
                            </nav>

                            <a href="tel:89009999999" className="main__inner--phone">
                                8 (900) 999 99 99
                            </a>

                            <img src="/assets/img/menu.svg" alt="menu" className="menu" />
                        </div>
                    </div>

                    <div className="main__text--inner">
                        <h1 className="main__text--title">
                            Доставка из Китая.
                        </h1>

                        <p className="main__text--text">
                            Возвращаем 100% по страховке при задержке.
                        </p>
                    </div>

                    <div className="main__form--inner">
                        <div className="main__form--input--inner">
                            <input type="text" className="input main__form--input" placeholder="+7 (999) 999-99-99" />

                            <button className="button main__form--button">
                                Оставить заявку
                            </button>
                        </div>

                        <p className="main__form--text">
                            Отправляя форму, вы соглашаетесь на обработку персональных данных, защищенных <a href="https://google.com">политикой конфиденциальности</a>
                        </p>
                    </div>

                    <div className="mobile__car--inner">
                        <img src="/assets/img/car-mobile.png" alt="Машина" className="main__inner--bg--mobile" />
                    </div>

                    <div className="main__text--mobile">
                        <p className="main__social--text">
                            Или просто напишите нам
                        </p>

                        <div className="main__social">
                            <a href="https://google.com" className="main__social--link">
                                <img src="/assets/img/telegram.png" alt="telegram" className="main__social--icon" />
                            </a>

                            <a href="https://google.com" className="main__social--link">
                                <img src="/assets/img/whatsapp.png" alt="whatsapp" className="main__social--icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App;
