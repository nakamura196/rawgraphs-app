import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './DataLoader.module.scss'

export default function Loading() {
  const { t } = useTranslation()
  return (
    <div className={styles['loading-component']}>
      <div className={styles['bg-animated']}/>
      <p>{t('dataLoader.loading')}</p>
    </div>
  )
}