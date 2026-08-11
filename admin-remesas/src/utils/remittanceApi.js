const BASE = 'https://6a768ef063e9caf860c302ad.mockapi.io/remittances/remittances'

export async function listRemittances({ page = 1, limit = 10, search = '', sortBy = 'charged_at', order = 'desc' } = {}) {
  const params = new URLSearchParams()
  params.set('page', String(page))
  params.set('limit', String(limit))
  params.set('sortBy', sortBy)
  params.set('order', order)
  if (search) params.set('search', search)
  const url = `${BASE}?${params.toString()}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Error fetching remittances: ${res.status}`)
  return res.json()
}

export async function getRemittanceById(id) {
  const url = `${BASE}/${id}`
  const res = await fetch(url)
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`Error fetching remittance ${id}: ${res.status}`)
  return res.json()
}

export async function updateRemittance(id, payload) {
  const url = `${BASE}/${id}`
  const res = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`Error updating remittance ${id}: ${res.status}`)
  return res.json()
}
