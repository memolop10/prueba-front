import React from 'react'
import Sidebar from '../components/Sidebar'
import CalculatorPanel from './CalculatorPanel'
import RemittancesPanel from './RemittancesPanel'
import '../styles/DashboardLayout.scss'

export default function DashboardLayout() {
  return (
    <main className="dashboard-main">
      <Sidebar />
      <CalculatorPanel />
      <RemittancesPanel />
    </main>
  )
}
