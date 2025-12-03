import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal, Button } from 'react-bootstrap'

function DataMismatchModal({
  replaceRequiresConfirmation,
  commitDataReplace,
  cancelDataReplace,
}) {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(true)

  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <Modal
      className="raw-modal"
      show={showModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title as="h5">
          {replaceRequiresConfirmation === 'parse-error' && t('dataMismatch.warningParseError')}
          {replaceRequiresConfirmation.startsWith('missing-column:') && t('dataMismatch.warningMissingColumn')}
          {replaceRequiresConfirmation === 'type-mismatch' && t('dataMismatch.warningTypeMismatch')}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {replaceRequiresConfirmation === 'parse-error' && (
          <>
            <p>{t('dataMismatch.parseErrorMessage')}</p>
            <p>{t('dataMismatch.parseErrorAction')}</p>
          </>
        )}
        {replaceRequiresConfirmation.startsWith('missing-column:') && (
          <>
            <p>
              {t('dataMismatch.missingColumnMessage', { column: replaceRequiresConfirmation.split(':')[1] })}
            </p>
            <p>{t('dataMismatch.missingColumnAction')}</p>
          </>
        )}
        {replaceRequiresConfirmation === 'type-mismatch' && (
          <>
            <p>{t('dataMismatch.typeMismatchMessage')}</p>
            <p>{t('dataMismatch.typeMismatchAction')}</p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="warning"
          onClick={() => {
            commitDataReplace()
          }}
        >
          {t('dataMismatch.loadNewData')}
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            cancelDataReplace()
          }}
        >
          {t('dataMismatch.cancel')}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DataMismatchModal
