import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search} from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'

export function AttendeeList() {
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">            
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg flex items-center gap-3">
                    <Search className="size-4 text-emerald-300"/>
                    <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar Participantes..."/>
                    </div>            
            </div>

            <Table>
                <thead>
                    <tr className='border-b border-white/10'>
                        <TableHeader style={{ width: 48 }} >
                            <input type='checkbox' className='size-4 bg-black/20 rounded  border border-white/10 '  />
                        </TableHeader>
                        <TableHeader >
                            Código
                        </TableHeader>
                        <TableHeader >
                            Participantes
                        </TableHeader>
                        <TableHeader >
                            Data de Incrição
                        </TableHeader>
                        <TableHeader >
                            Data do check-in
                        </TableHeader>
                        <TableHeader style={{ width: 64 }} >
                            botão
                        </TableHeader>
                    </tr>
                </thead>
                <tbody>
                    { Array.from ({ length: 10}).map( (_, index)=> {
                        return (
                            <TableRow key={index} className='border-b border-white/10 hover:bg-white/5'>
                                <TableCell>
                                    <input type='checkbox' className='size-4 bg-black/20 rounded  border border-white/10'  />
                                </TableCell>
                                <TableCell>
                                    123213
                                </TableCell>
                                <TableCell>
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-semibold text-white'>Gleybson</span>
                                        <span>gleybson@gmail.com</span>
                                    </div>
                                </TableCell>
                                <TableCell>7 dias atras</TableCell>
                                <TableCell>3 dias atras</TableCell>
                                <TableCell>                                     
                                    <IconButton transparent={true}>
                                        <MoreHorizontal className='size-4'/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}                            
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>
                        <TableCell className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                            <div className='inline-flex items-center gap-8'>
                            <span>Página 1 de 23</span>
                                <div className='flex gap-1.5'>
                                    <IconButton>
                                        <ChevronsLeft className='size-4'/>
                                    </IconButton>
                                    <IconButton>
                                        <ChevronLeft className='size-4'/>
                                    </IconButton>
                                    <IconButton>
                                        <ChevronRight className='size-4'/>
                                    </IconButton>
                                    <IconButton>
                                        <ChevronsRight className='size-4'/>
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>      
        </div>
        
    )
}