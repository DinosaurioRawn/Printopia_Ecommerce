//import React from 'react'

interface SeparatorProps {
    className?: string;
}

export const Separator = ({className} : SeparatorProps) => {
    return <div className={`bg-slate-200 h-px my-5 ${className}`}></div>;
}
