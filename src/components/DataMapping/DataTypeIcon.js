import React from 'react'
import { useTranslation } from 'react-i18next'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { dataTypeIcons } from '../../constants'
import styles from './DataMapping.module.scss'

function DataTypeIcon({ type }) {
  const { t } = useTranslation()
  const DataTypeIcon = dataTypeIcons[type]
  return (
    <span>
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id={`tooltip-top`}>
            {t('dataMapping.acceptsType', {
              type: t('dataGrid.type' + type.charAt(0).toUpperCase() + type.slice(1)),
            })}
          </Tooltip>
        }
      >
        <DataTypeIcon className={styles['accepted-type-icon']} />
      </OverlayTrigger>
    </span>
  )
}

export default DataTypeIcon
