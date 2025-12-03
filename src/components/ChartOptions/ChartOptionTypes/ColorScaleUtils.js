import React from 'react'
import { useTranslation } from 'react-i18next'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import {
  BsArrowCounterclockwise,
  BsArrowLeftRight,
  BsLockFill,
  BsUnlockFill,
} from 'react-icons/bs'

function ResetBtn({ resetScale }) {
  const { t } = useTranslation()
  return (
    <OverlayTrigger
      key="bottom"
      placement="bottom"
      overlay={<Tooltip id={`tooltip-top`}>{t('colorScale.resetDomain')}</Tooltip>}
    >
      <span type="button" className="btn" onClick={resetScale}>
        <BsArrowCounterclockwise width="16" height="16" />
      </span>
    </OverlayTrigger>
  )
}

function InvertBtn({ invertScale }) {
  const { t } = useTranslation()
  return (
    <OverlayTrigger
      key="bottom"
      placement="bottom"
      overlay={<Tooltip id={`tooltip-top`}>{t('colorScale.invert')}</Tooltip>}
    >
      <span type="button" className="btn" onClick={invertScale}>
        <BsArrowLeftRight width="16" height="16" />
      </span>
    </OverlayTrigger>
  )
}

function LockBtn({ handleChangeLocked, locked }) {
  const { t } = useTranslation()
  return (
    <OverlayTrigger
      key="bottom"
      placement="bottom"
      overlay={<Tooltip id={`tooltip-top`}>{locked ? t('colorScale.unlockScale') : t('colorScale.lockScale')}</Tooltip>}
    >
      <span
        type="button"
        className={`btn ${locked ? 'Xbtn-primary' : ''}`}
        onClick={() => handleChangeLocked(!locked)}
      >
        {locked ? <BsUnlockFill width="16" height="16" /> : <BsLockFill width="16" height="16" />}
      </span>
    </OverlayTrigger>
  )
}

export { ResetBtn, InvertBtn, LockBtn }
