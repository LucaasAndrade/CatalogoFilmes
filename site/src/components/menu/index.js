
import './index.scss'

export default function Index() {
    return (
        <nav className="comp-menu">
            <div>
                <div className='logo'>
                    <img src="/assets/images/logo.svg" alt="logo" />
                    <div>Portifolio.me</div>
                </div>

                <div className='menu-items'>
                    <div>
                        <img src="/assets/images/icon-home.svg" alt="home" />
                        <div>Home</div>
                    </div>
                    <div>
                        <img src="/assets/images/icon-cadastrar.svg" alt="cadastrar" />
                        <div>Cadastrar</div>
                    </div>
                    <div>
                        <img src="/assets/images/icon-consultar.svg" alt="consultar" />
                        <div>Consultar</div>
                    </div>
                </div>
            </div>

            <div className='menu-items'>
                <div>
                    <img src="/assets/images/icon-sair.svg" alt="consultar" />
                    <div>Sair</div>
                </div>
            </div>
        </nav>
    )
}