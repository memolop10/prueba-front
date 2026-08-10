import React from 'react'
import { Modal, Button } from 'antd'

function getFriendlyMessage(message) {
  if (!message) return ''
  const cleaned = message.replace(/^(Error:\s*)?/i, '')

  if (/Error fetching remittances: 404/i.test(cleaned)) {
    return 'No se encontró ninguna remesa que coincida con la búsqueda.'
  }

  if (/Error fetching remittance.*: 404/i.test(cleaned)) {
    return 'No se encontró la remesa solicitada.'
  }

  if (/Error updating remittance.*: 404/i.test(cleaned)) {
    return 'No se encontró la remesa para actualizar.'
  }

  if (/Request failed with status code 404/i.test(cleaned)) {
    return 'No se encontró el recurso solicitado.'
  }

  return cleaned
    .replace(/Network Error/i, 'No se pudo conectar. Revisa tu conexión a internet.')
    .replace(/Request failed with status code \d+/i, 'No se pudo completar la solicitud. Intenta nuevamente.')
    .replace(/Failed to fetch/i, 'No se pudo conectar con el servidor. Intenta de nuevo.')
    .replace(/timeout/i, 'La operación tomó demasiado tiempo. Intenta otra vez.')
}

export default function ErrorBanner({ message, onClose }) {
  const visible = Boolean(message)
  const description = getFriendlyMessage(message)

  return (
    <Modal
      open={visible}
      title="Atención"
      onCancel={onClose}
      onOk={onClose}
      okText="Cerrar"
      cancelButtonProps={{ style: { display: 'none' } }}
      zIndex={1050}
      footer={[
        <Button key="close" type="primary" onClick={onClose}>
          Cerrar
        </Button>,
      ]}
    >
      <p>{description}</p>
    </Modal>
  )
}
