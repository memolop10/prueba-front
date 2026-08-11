import { create } from 'zustand'
import { listRemittances, getRemittanceById, updateRemittance } from '../utils/remittanceApi'

let latestRemittancesRequest = 0

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
    const requestId = ++latestRemittancesRequest
    try {
      set({ loading: true, error: null })
      const pageData = await listRemittances({ page, limit, search })
      if (requestId !== latestRemittancesRequest) return

      const minimumTotal = (page - 1) * limit + pageData.length
      const progressiveTotal = pageData.length === limit ? page * limit + 1 : minimumTotal
      const total = pageData.length === limit ? Math.max(get().total, progressiveTotal) : minimumTotal

      set({ remittances: pageData, total, page, limit, search, loading: false })
    } catch (err) {
      if (requestId !== latestRemittancesRequest) return
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

  setSearch: (search) => set({ search, page: 1, total: 0 }),
  setPage: (page) => set({ page }),
  setLimit: (limit) => set({ limit }),
  setActiveSidebar: (id) => set({ activeSidebar: id }),
  clearError: () => set({ error: null }),
}))
