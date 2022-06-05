import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'

import './index.scss'


export default function Index() {
    return (
        <main className='page page-consultar'>
            <Menu />
            <div className='container'>
                <Cabecalho />
                
                <div className='conteudo'>

                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar filmes por nome' />
                        <img src='/assets/images/icon-buscar.svg' alt='buscar' />
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>IDENTIFICAÇÃO</th>
                                <th>FILME</th>
                                <th>AVALIAÇÃO</th>
                                <th>LANÇAMENTO</th>
                                <th>DISPONÍVEL</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#01</td>
                                <td>Harry Potter e a Pedra Filosofal</td>
                                <td>8,0</td>
                                <td>04/01/05</td>
                                <td>Sim</td>
                                <td>
                                    <img src='/assets/images/icon-editar.svg' alt='editar' />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src='/assets/images/icon-remover.svg' alt='remover' />
                                </td>
                            </tr>
                            <tr>
                                <td>#01</td>
                                <td>Harry Potter e a Pedra Filosofal</td>
                                <td>8,0</td>
                                <td>04/01/05</td>
                                <td>Sim</td>
                                <td>
                                    <img src='/assets/images/icon-editar.svg' alt='editar' />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src='/assets/images/icon-remover.svg' alt='remover' />
                                </td>
                            </tr>
                            <tr>
                                <td>#01</td>
                                <td>Harry Potter e a Pedra Filosofal</td>
                                <td>8,0</td>
                                <td>04/01/05</td>
                                <td>Sim</td>
                                <td>
                                    <img src='/assets/images/icon-editar.svg' alt='editar' />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src='/assets/images/icon-remover.svg' alt='remover' />
                                </td>
                            </tr>
                            <tr>
                                <td>#01</td>
                                <td>Harry Potter e a Pedra Filosofal</td>
                                <td>8,0</td>
                                <td>04/01/05</td>
                                <td>Sim</td>
                                <td>
                                    <img src='/assets/images/icon-editar.svg' alt='editar' />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src='/assets/images/icon-remover.svg' alt='remover' />
                                </td>
                            </tr>
                            <tr>
                                <td>#01</td>
                                <td>Harry Potter e a Pedra Filosofal</td>
                                <td>8,0</td>
                                <td>04/01/05</td>
                                <td>Sim</td>
                                <td>
                                    <img src='/assets/images/icon-editar.svg' alt='editar' />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src='/assets/images/icon-remover.svg' alt='remover' />
                                </td>
                            </tr>
                          
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </main>
    )
}
