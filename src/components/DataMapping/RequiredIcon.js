import React from 'react'
import { useTranslation } from 'react-i18next'
import { ReactComponent as Asterisk } from './asterisk.svg'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

function RequiredIcon() {
  const { t } = useTranslation()
  return (
    <OverlayTrigger
      key="top"
      placement="top"
      overlay={<Tooltip id={`tooltip-top`}>{t('dataMapping.mandatory')}</Tooltip>}
    >
      <Asterisk width="1rem" height="1rem" style={{marginRight:"2px"}} />
    </OverlayTrigger>
  )
}

export default RequiredIcon
