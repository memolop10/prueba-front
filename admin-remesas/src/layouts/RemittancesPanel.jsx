import React, { useEffect, useState } from 'react'
import { Typography, Card, Table, Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import UserBanner from '../components/UserBanner'
import ErrorBanner from '../components/ErrorBanner'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import { useRemittanceStore } from '../store/useRemittanceStore'
import '../styles/RemittancesPanel.scss'

export default function RemittancesPanel() {
  const { remittances, page, limit, total, error, fetchRemittances, setPage, clearError } = useRemittanceStore()
  const [showSearch, setShowSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchRemittances({ page, limit })
  }, [page, limit])

  const handleSearch = (value) => {
    setSearchTerm(value)
    useRemittanceStore.setState({ search: value })
    fetchRemittances({ page: 1, limit, search: value })
    setPage(1)
  }

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', ellipsis: true },
    { title: 'Compañía', dataIndex: 'company', key: 'company', ellipsis: true },
    { title: 'Monto', dataIndex: 'amount', key: 'amount', render: (value) => `$${Number(value).toLocaleString()}`, ellipsis: true },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
      ellipsis: true,
      render: (value) => (
        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {value === 'NO_COBRADO' ? 'No cobrada' : value === 'COBRADO' ? 'Cobrada' : value}
        </div>
      ),
    },
    { title: 'Fecha Cobro', dataIndex: 'charged_at', key: 'charged_at', render: (value) => value || '-', ellipsis: true },
  ]

  return (
    <section className="remittances-panel">
      <UserBanner />

      <div className="remittances-panel__top">
        <div className="remittances-panel__date-group">
          <Typography.Text className="remittances-panel__today-title">Hoy</Typography.Text>
          <div className="remittances-panel__today-date">{new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date())}</div>
        </div>
        <div className="remittances-panel__actions">
          <Button
            type="primary"
            shape="circle"
            icon={<FontAwesomeIcon icon={faKeyboard} className="keyboard-icon" />}
            className="keyboard-button"
          />
        </div>
      </div>

      <SearchBar
        showSearch={showSearch}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearch={handleSearch}
        onToggleSearch={() => setShowSearch((prev) => !prev)}
      />

      <Card className="remittances-card" styles={{ body: { padding: 0 } }}>
        <div className="remittances-card__body">
          <Table
            className="remittances-table"
            columns={columns}
            dataSource={remittances}
            rowKey="id"
            pagination={false}
            locale={{ emptyText: 'No hay remesas' }}
          />
        </div>
      </Card>

      <Pagination current={page} pageSize={limit} total={total} onChange={(p) => setPage(p)} />

      <ErrorBanner message={error} onClose={clearError} />
    </section>
  )
}
