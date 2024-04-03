import nlwUniteIcon from "../assets/nlw-unit-ion.svg"

export function Header(){
    return (
        <div className="flex items-center gap-5 py-2">
             <img src={nlwUniteIcon} alt="nlwUniteIcon" />

             <nav className="flex items-center gap-5">
                <a href="" className="font-medium text-sm text-zinc-300">Eventos</a>
                <a href="" className="font-medium text-sm text-zinc-200">Participantes</a>
             </nav>
        </div>
    )
}