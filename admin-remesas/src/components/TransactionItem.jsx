import React from 'react'

export default function TransactionItem({ item }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.company}</td>
      <td>${Number(item.amount).toLocaleString()}</td>
      <td>{item.status}</td>
      <td>{item.charged_at || '-'}</td>
    </tr>
  )
}
