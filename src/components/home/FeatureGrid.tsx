//import React from 'react'
import { MdBuild, MdFort, MdLocalShipping, MdMiscellaneousServices } from 'react-icons/md'

export const FeatureGrid = () => {
    return (
        <div className='grid grid-cols-2 gap-8 mt-6 mb-16 lg:grid-cols-4 lg:gap-5'>
            <div className="flex items-center gap-6">
                <MdLocalShipping size={40} className='text-slate-600' />
                <div className='space-y-1'>
                    <p className='font-semibold'>Envio gratis nacional</p>
                    <p className='text-sm'>En pedidos superiores a $1000 </p>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <MdFort size={40} className='text-slate-600' />
                <div className='space-y-1'>
                    <p className='font-semibold'>Impresion de alta calidad</p>
                    <p className='text-sm'>En filamento y resina</p>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <MdMiscellaneousServices size={40} className='text-slate-600' />
                <div className='space-y-1'>
                    <p className='font-semibold'>Servicio de modelado 3D</p>
                    <p className='text-sm'>Organico/Parametrico/Replicas 3D</p>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <MdBuild size={40} className='text-slate-600' />
                <div className='space-y-1'>
                    <p className='font-semibold'>Servicio tecnico</p>
                    <p className='text-sm'>Asistencia y reparacion de impresoras 3D</p>
                </div>
            </div>

        </div>
    );
}
