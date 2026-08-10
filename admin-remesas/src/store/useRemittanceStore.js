import { create } from 'zustand'
import { listRemittances, listAllRemittances, getRemittanceById, updateRemittance } from '../utils/remittanceApi'

export const useRemittanceStore = create((set, get) => ({
  remittances: [],
  total: 0,
  activeSidebar: 'remittances',
  page: 1,
  limit: 10,
  search: '',
  loading: false,
  error: null,

  fetchRemittances: async ({ page = get().page, limit = get().limit, search = get().search } = {}) => {
    try {
      set({ loading: true, error: null })
      const allData = await listAllRemittances({ search, limit, maxPages: 20 })
      const sortedRemittances = [...allData].sort((firstRemittance, secondRemittance) => {
        const firstChargedAt = firstRemittance.charged_at || ''
        const secondChargedAt = secondRemittance.charged_at || ''
        if (!firstChargedAt && !secondChargedAt) return 0
        if (!firstChargedAt) return 1
        if (!secondChargedAt) return -1
        return secondChargedAt.localeCompare(firstChargedAt)
      })
      const paged = sortedRemittances.slice((page - 1) * limit, page * limit)
      set({ remittances: paged, total: sortedRemittances.length, page, limit, search, loading: false })
    } catch (err) {
      set({ error: err.message || String(err), loading: false })
    }
  },

  getById: async (id) => {
    try {
      set({ loading: true, error: null })
      const item = await getRemittanceById(id)
      set({ loading: false })
      return item
    } catch (err) {
      set({ error: err.message || String(err), loading: false })
      return null
    }
  },

  markAsCollected: async (id) => {
    try {
      set({ loading: true, error: null })
      const now = new Date().toISOString().slice(0, 10)
      const updated = await updateRemittance(id, { status: 'COBRADO', charged_at: now })
      // refresh current page
      await get().fetchRemittances()
      set({ loading: false })
      return updated
    } catch (err) {
      set({ error: err.message || String(err), loading: false })
      return null
    }
  },

  setSearch: (search) => set({ search }),
  setPage: (page) => set({ page }),
  setLimit: (limit) => set({ limit }),
  setActiveSidebar: (id) => set({ activeSidebar: id }),
  clearError: () => set({ error: null }),
}))
