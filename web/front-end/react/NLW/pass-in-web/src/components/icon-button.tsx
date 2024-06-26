import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonPropos extends  ComponentProps<'button'>{
    transparent?: boolean;
}

export function IconButton({transparent, ...props}: IconButtonPropos){
    return (
        <button 
            {...props} 
            className={twMerge(
                'bg-black/20 border border-white/10 rounded-md p-1.5',
                transparent? 'bg-black/20' : 'bg-white/10',
                props.disabled? 'opacity-50': null,
            )}
        />
    )
}