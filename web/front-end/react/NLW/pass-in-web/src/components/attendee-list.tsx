import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search} from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { ChangeEvent, useEffect, useId, useState } from 'react'
import { attendess } from '../data/attendees'
import  dayjs from 'dayjs'
import  relativeTime  from 'dayjs/plugin/relativeTime'
import  'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface Attendee {
    id: string,
    nome: string,
    emauil: string,
    createdAt: string,
    checkedInAt: string | null,
}

export function AttendeeList() {

    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    /*states para funcionar com API*/
    const [total, setTotal ] = useState(0)
    const [attendees, setAttendess] = useState<Attendee[]>([])

    useEffect( ()=> {
        const url = new URL('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')
        url.searchParams.set('pageIndex', String(page - 1))

        if(search.length > 0 ){
            url.searchParams.set('query', search )
        }

        fetch(`${url}`)
        .then( response => response.json())
        .then( data => {
            console.log("data", data)
            setAttendess(data.attendees)
        })
    }, [page, search])


    //const totalPages =  Math.ceil( total / 10 ) para funcionar com API
    const totalPages =  Math.ceil( attendess.length / 10 )

    function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>){
        setSearch(event.target.value)
        setPage(1)
    }

    function goToNextPage(){
        setPage(page + 1)
    }

    function goToPreviousPage(){
        setPage(page - 1)
    }

    function goToLastPage(){
        setPage( totalPages )
    }

    function goToFirstPage(){
        setPage( 1 )
    }

    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">            
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg flex items-center gap-3">
                    <Search className="size-4 text-emerald-300"/>
                    <input 
                        onChange={onSearchInputChanged} 
                        className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0" 
                        placeholder="Buscar Participantes..."/>
                    </div>            
            </div>

            {search}

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
                    { attendess.slice( (page - 1) * 10, (page * 10 )).map( ( attendee)=> {
                        return (
                            <TableRow key={attendee.id} className='border-b border-white/10 hover:bg-white/5'>
                                <TableCell>
                                    <input type='checkbox' className='size-4 bg-black/20 rounded  border border-white/10'  />
                                </TableCell>
                                <TableCell>
                                    {attendee.id}
                                </TableCell>
                                <TableCell>
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-semibold text-white'>{attendee.name}</span>
                                        <span>{attendee.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{ dayjs().to(attendee.createdAt)}</TableCell>
                                <TableCell>{ attendee.checkedInAt === null 
                                        ? <span className='text-zinc-400'> "Não fez checkIn"</span> : 
                                        dayjs().to(attendee.checkedInAt)}</TableCell>                                 
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
                        <TableCell colSpan={3}>Mostrando  10 de { attendess.length } itens</TableCell>
                        <TableCell className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                            <div className='inline-flex items-center gap-8'>
                            <span>Página  { page } de  { totalPages } </span>
                                <div className='flex gap-1.5'>
                                    <IconButton onClick={goToFirstPage} disabled={ page === 1} >
                                        <ChevronsLeft className='size-4'/>
                                    </IconButton>
                                    <IconButton  onClick={ goToPreviousPage} disabled={ page === 1}>
                                        <ChevronLeft className='size-4'/>
                                    </IconButton>
                                    <IconButton onClick={goToNextPage} disabled={ page ===  totalPages}>
                                        <ChevronRight className='size-4'/>
                                    </IconButton>
                                    <IconButton onClick={goToLastPage} disabled={ page ===  totalPages}>
                                        <ChevronsRight  className='size-4'/>
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>      
        </div>        
    )

     /* Parei de codar aos 30 min*/
    /* AQUI DEVE SER DESCOMENTADO PARA FUNCIONAR COM API
    A PAGINAÇÃO DEVE FUNCIONAR AQUI attendess.map                
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">            
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg flex items-center gap-3">
                    <Search className="size-4 text-emerald-300"/>
                    <input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar Participantes..."/>
                    </div>            
            </div>

            {search}

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
                    { attendess.map(( attendee)=> {
                        return (
                            <TableRow key={attendee.id} className='border-b border-white/10 hover:bg-white/5'>
                                <TableCell>
                                    <input type='checkbox' className='size-4 bg-black/20 rounded  border border-white/10'  />
                                </TableCell>
                                <TableCell>
                                    {attendee.id}
                                </TableCell>
                                <TableCell>
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-semibold text-white'>{attendee.name}</span>
                                        <span>{attendee.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{ dayjs().to(attendee.createdAt)}</TableCell>
                                <TableCell>{ attendee.checkedInAt === null 
                                        ? <span className='text-zinc-400'> "Não fez checkIn"</span> : 
                                        dayjs().to(attendee.checkedInAt)}</TableCell>                                 
                                <TableCell>                                       
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
                        <TableCell colSpan={3}>Mostrando  { attendees.lentgh } de { total } itens</TableCell>
                        <TableCell className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                            <div className='inline-flex items-center gap-8'>
                            <span>Página  { page } de  { totalPages } </span>
                                <div className='flex gap-1.5'>
                                    <IconButton onClick={goToFirstPage} disabled={ page === 1} >
                                        <ChevronsLeft className='size-4'/>
                                    </IconButton>
                                    <IconButton  onClick={ goToPreviousPage} disabled={ page === 1}>
                                        <ChevronLeft className='size-4'/>
                                    </IconButton>
                                    <IconButton onClick={goToNextPage} disabled={ page ===  totalPages}>
                                        <ChevronRight className='size-4'/>
                                    </IconButton>
                                    <IconButton onClick={goToLastPage} disabled={ page ===  totalPages}>
                                        <ChevronsRight  className='size-4'/>
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>      
        </div>
        
    )
    
    
    */
}