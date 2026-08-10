import React from 'react'
import { Pagination as AntPagination } from 'antd'
import '../styles/Pagination.scss'

export default function Pagination({ current, pageSize, total, onChange }) {
  return (
    <div className="pagination-wrapper">
      <AntPagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={onChange}
        showSizeChanger={false}
        className="pagination-control"
      />
    </div>
  )
}
