import * as React from 'react'
import { hydrateRoot } from 'react-dom/client'

import { App } from '@/App.tsx'

window.addEventListener('load', () => {
    const root = hydrateRoot(document.getElementById('react_root'), <App />)
    // hydrateRoot(document.getElementById('react_root'), <App />)
})
