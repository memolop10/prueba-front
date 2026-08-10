import React from 'react'
import { Input, Button } from 'antd'
import { SearchOutlined, SlidersOutlined, PrinterOutlined } from '@ant-design/icons'
import '../styles/SearchBar.scss'

export default function SearchBar({ showSearch, searchTerm, onSearchTermChange, onSearch, onToggleSearch }) {
  return (
    <div className="search-bar">
      {showSearch ? (
        <Input.Search
          className="search-bar__input"
          placeholder="Buscar por id, compañía o monto"
          value={searchTerm}
          onChange={(e) => onSearchTermChange?.(e.target.value)}
          onSearch={onSearch}
          allowClear
          enterButton
        />
      ) : (
        <div className="search-bar__spacer" />
      )}
      <div className="search-bar__actions">
        <Button type="text" icon={<SearchOutlined />} onClick={onToggleSearch} />
        <Button type="text" icon={<SlidersOutlined />} />
        <Button type="text" icon={<PrinterOutlined />} />
      </div>
    </div>
  )
}
