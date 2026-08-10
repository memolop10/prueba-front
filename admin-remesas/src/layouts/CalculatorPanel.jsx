import React, { useState } from 'react'
import InputDisplay from '../components/InputDisplay'
import Keypad from '../components/Keypad'
import { useRemittanceStore } from '../store/useRemittanceStore'
import '../styles/CalculatorPanel.scss'

export default function CalculatorPanel() {
  const [input, setInput] = useState('')
  const store = useRemittanceStore()

  const handleKey = (key) => setInput((currentInput) => (currentInput + key).slice(0, 8))
  const handleBack = () => setInput((currentInput) => currentInput.slice(0, -1))
  const handleEnter = async () => {
    const id = input.trim()
    if (!id) return
    const item = await store.getById(id)
    if (!item) {
      useRemittanceStore.setState({ error: `Remesa ${id} no encontrada` })
      return
    }
    if (item.status === 'COBRADO') {
      useRemittanceStore.setState({ error: `Remesa ${id} ya está cobrada` })
      return
    }
    await store.markAsCollected(id)
    setInput('')
  }

  return (
    <section className="calculator-panel">
      <div className="calculator-panel__header">
        <div className="calculator-panel__title">Ventanilla Digital</div>
        <hr className="calculator-panel__divider" />
        <div className="calculator-panel__subtitle">Remesas</div>
      </div>

      <InputDisplay value={input} />
      <Keypad onKey={handleKey} onBack={handleBack} onEnter={handleEnter} />
    </section>
  )
}
