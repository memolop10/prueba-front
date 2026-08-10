import React from 'react'
import { Input } from 'antd'

export default function InputDisplay({ value }) {
  return (
    <Input
      readOnly
      value={value || '0'}
      size="large"
      style={{
        background: '#ffffff',
        color: '#111827',
        borderRadius: 14,
        border: '1px solid #d1d5db',
        fontSize: 24,
        height: 64,
        textAlign: 'center',
      }}
    />
  )
}
