import React from 'react'
import TransactionItem from './TransactionItem'

export default function TransactionList({ items }) {
  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Compañía</th>
            <th>Monto</th>
            <th>Estado</th>
            <th>Fecha Cobro</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length ? (
            items.map((it) => <TransactionItem key={it.id} item={it} />)
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center', padding: 12 }}>No hay remesas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
