
import { useEffect, useState } from 'react'
import DOTS from 'vanta/dist/vanta.topology.min'
import randomColor from 'randomcolor'

export default function BackgroundTopology({ color }) {
    useEffect(() => {
        if (!window) return
        const effect = DOTS({
            el: '#qisnasssdfas',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color,
            backgroundColor: 'transparent'
        })

        return () => {
            effect.destroy()
        }
    }, [color])

    return <div id="qisnasssdfas" className="absolute inset-0" />
}
