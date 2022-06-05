
import './index.scss'

export default function Index() {
    return (
        <main className='page page-login'>
            <section className="box-login">

                <div className="bem-vindo">
                    <img src="/assets/images/logo.svg" alt="logo" />
                    <h1> Seja Bem-vindo!</h1>
                </div>

                <div>
                    <div className='form-row'>
                        <label>E-mail:</label>
                        <input type='text' placeholder='Informe seu e-mail' />
                    </div>
                    <div className='form-row'>
                        <label>Senha:</label>
                        <input type='password' placeholder='***' />
                    </div>
                    <div className='form-entrar'>
                        <button className='btn-black'>ENTRAR</button> 
                    </div>
                    <div className='form-entrar invalido'>
                        Credenciais inválidas
                    </div>
                </div>

            </section>
        </main>
    )
}
