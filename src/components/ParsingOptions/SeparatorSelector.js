import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Dropdown } from 'react-bootstrap'
import { separatorsLabels } from '../../constants'

import styles from './ParsingOptions.module.scss'

export default function SeparatorSelector({
  title,
  value,
  onChange,
  ...props
}) {
  const { t } = useTranslation()
  const inputValue = value
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t')

  const handleChange = useCallback(
    (separator) => {
      if (onChange) {
        const nextValue = separator
          .replace(/\\r/g, '\r')
          .replace(/\\n/g, '\n')
          .replace(/\\t/g, '\t')
        onChange(nextValue)
      }
    },
    [onChange]
  )

  const formatValue = (value)=>{
    const engLabel = separatorsLabels[value]
    const label = engLabel ? t('separators.' + engLabel.toLowerCase()) : engLabel
    return (
      <>
        <span className={['small',styles['separator-preview']].join(' ')}>{value}</span> <span>{label}</span>
      </>
    )
  }

  return (
    <>
      <div className="option">
        {title}
        <Dropdown className="d-inline-block raw-dropdown">
          <Dropdown.Toggle variant="white" className="d-flex justify-content-start align-items-center text-truncate">
            { formatValue(inputValue) }
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.keys(separatorsLabels).map(key=>{
              return <Dropdown.Item key={separatorsLabels[key]} onSelect={() => handleChange(key)}>
                { formatValue(key) }
              </Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}
