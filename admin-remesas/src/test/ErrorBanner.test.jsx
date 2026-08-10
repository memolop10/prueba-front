import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ErrorBanner from '../components/ErrorBanner'

describe('ErrorBanner', () => {
  test('renders friendly message and can be closed', async () => {
    const onClose = vi.fn()
    render(<ErrorBanner message={'Error fetching remittances: 404'} onClose={onClose} />)

    expect(screen.getByText('Atención')).toBeInTheDocument()
    expect(screen.getByText('No se encontró ninguna remesa que coincida con la búsqueda.')).toBeInTheDocument()

    const btn = screen.getByRole('button', { name: /Cerrar/i })
    await userEvent.click(btn)
    expect(onClose).toHaveBeenCalled()
  })
})
