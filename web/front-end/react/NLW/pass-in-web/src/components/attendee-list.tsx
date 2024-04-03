import { Search} from 'lucide-react'

export function AttendeeList() {
    return (
        <div>
            <div className="flex gap-3 items-center">            
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3">
                    <Search className="size-4 text-emerald-300"/>
                    <input className="bg-transparent flex-1 outline-none" placeholder="Buscar Participantes..."/>
                    </div>            
            </div>

            <div className='border border-white/10 rounded-lg'>
                <table className='w-full border border-white/10 rounded-lg'>
                    <thead>
                        <tr>
                            <th>
                                <input type='checkbox'/>
                            </th>
                            <th>
                                Código
                            </th>
                            <th>
                                Participantes
                            </th>
                            <th>
                                Data de Incrição
                            </th>
                            <th>
                                Data do check-in
                            </th>
                            <th>
                                botão
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type='checkbox'/>
                                </td>
                                <td>
                                    123213
                                </td>
                                <td>
                                    <div>
                                        <span>Gleybson</span>
                                        <span>gleybson@gmail.com</span>
                                    </div>
                                </td>
                                <td>7 dias atras</td>
                                <td>3 dias atras</td>
                                <td>Botão</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3}>Mostrando 10 de 228 itens</td>
                                <td colSpan={3}>Página 1 de 23</td>
                            </tr>
                        </tfoot>
                    
                </table>
            </div>
            
        </div>
        
    )
}