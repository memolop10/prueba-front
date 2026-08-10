import React from 'react'
import { Avatar, Badge, Button, Space, Typography } from 'antd'
import { BellOutlined, UserOutlined } from '@ant-design/icons'

export default function UserBanner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 14, marginBottom: 22, padding: 0 }}>
      <Badge dot color="#22c55e">
        <Button type="text" icon={<BellOutlined />} style={{ color: '#0f172a', fontSize: 20 }} />
      </Badge>
      <Space align="center" size={16}>
        <Avatar icon={<UserOutlined />} size={44} style={{ background: '#e2e7ff', color: '#1e293b' }} />
        <div>
          <Typography.Text style={{ display: 'block', fontSize: 16, fontWeight: 700, color: '#0f172a' }}>
            Guilllermo
          </Typography.Text>
          <Typography.Text style={{ color: '#64748b' }}>
            Developer
          </Typography.Text>
        </div>
      </Space>
    </div>
  )
}
