import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useRemittanceStore } from '../store/useRemittanceStore'
import * as api from '../utils/remittanceApi'

describe('useRemittanceStore', () => {
  it('fetchRemittances sets data and total', async () => {
    const mockData = [{ id: '1', company: 'A', amount: 100 }]
    vi.spyOn(api, 'listRemittances').mockResolvedValue(mockData)

    const { result } = renderHook(() => useRemittanceStore())

    await act(async () => {
      await result.current.fetchRemittances({ page: 1, limit: 10 })
    })

    expect(result.current.remittances).toEqual(mockData)
    expect(result.current.total).toBe(mockData.length)
    expect(api.listRemittances).toHaveBeenCalledOnce()
    expect(api.listRemittances).toHaveBeenCalledWith({ page: 1, limit: 10, search: '' })
  })
})
