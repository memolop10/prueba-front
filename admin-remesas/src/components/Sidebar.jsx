import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMoneyBillWave, faChartBar, faCog, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { useRemittanceStore } from '../store/useRemittanceStore'
import sidebarLogo from '../public/unnamed.png'
import '../styles/Sidebar.scss'

export default function Sidebar() {
  const items = [
    { id: 'home', icon: faHome, title: 'Inicio' },
    { id: 'remittances', icon: faMoneyBillWave, title: 'Remesas' },
    { id: 'reports', icon: faChartBar, title: 'Reportes' },
    { id: 'calendar', icon: faCalendarAlt, title: 'Calendario' },
    { id: 'settings', icon: faCog, title: 'Ajustes' },
  ]

  const active = useRemittanceStore((state) => state.activeSidebar)
  const setActive = useRemittanceStore((state) => state.setActiveSidebar)

  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img src={sidebarLogo} alt="Logo" className="sidebar__logo-image" />
      </div>

      <nav className="sidebar__nav">
        {items.map((it) => {
          const activeStyle = it.id === active ? { background: '#233b5c', color: '#fff' } : { background: 'transparent', color: '#cbd5e1' }
          return (
            <button
              key={it.id}
              title={it.title}
              onClick={() => setActive(it.id)}
              style={{ width: 48, height: 48, borderRadius: 10, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', ...activeStyle }}
            >
              <FontAwesomeIcon icon={it.icon} size="lg" />
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
