import classNames from 'classnames'
import React, { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Modal } from 'react-bootstrap'
import { useDropzone } from 'react-dropzone'
import { BsCloud, BsUpload } from 'react-icons/bs'
import styles from './CustomChartLoader.module.scss'

function LoadFromFile({ loading, load, t }) {
  function onDrop(acceptedFiles) {
    if (acceptedFiles.length) {
      load(acceptedFiles[0])
    }
  }
  const {
    getRootProps,
    getInputProps,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    disabled: loading,
    onDrop,
    accept: 'text/plain,text/javascript,.js',
    maxFiles: 1,
  })
  return (
    <div
      className={classNames(styles.dropzone, {
        [styles.reject]: isDragReject,
        [styles.accept]: isDragAccept,
      })}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <span>{t('customChartLoader.dragFile')} </span>
      <Button className={styles['browse-button']} color="primary">
        {t('customChartLoader.browse')}
      </Button>
      <span>{t('customChartLoader.fromComputer')}</span>
      <div className={styles.dropin}>
        {isDragAccept && <p>{t('customChartLoader.allAccepted')}</p>}
        {isDragReject && <p>{t('customChartLoader.someRejected')}</p>}
      </div>
    </div>
  )
}

function LoadFromString({ load, loading, placeholder, t }) {
  const [value, setValue] = useState('')
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        load(value)
      }}
    >
      <input
        disabled={loading}
        className="form-control mb-2"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="text-right">
        <button
          type="submit"
          disabled={value.trim() === '' || loading}
          className="btn btn-primary"
          onClick={() => {}}
        >
          {t('customChartLoader.loadYourChart')}
        </button>
      </div>
    </form>
  )
}

function CustomChartLoaderForm({
  uploadCustomCharts,
  loadCustomChartsFromUrl,
  loadCustomChartsFromNpm,
  onClose,
  t,
}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [type, setType] = useState('file')

  function handleError(e) {
    setLoading(false)
    if (e.isAbortByUser) {
      return
    }
    console.log(e)
    setError(e)
  }

  function changeImportType(type) {
    setError(null)
    setType(type)
  }

  return (
    <div className="row" style={{ minHeight: 300 }}>
      <div className="col-md-4">
        <div
          onClick={() => {
            changeImportType('file')
          }}
          className={classNames(
            'd-flex align-items-center cursor-pointer',
            styles.loadingOption,
            {
              [styles.active]: type === 'file',
            }
          )}
        >
          <BsUpload className="w-25" />
          <h4 className="m-0 d-inline-block">{t('customChartLoader.loadFromFile')}</h4>
        </div>
        <div
          onClick={() => changeImportType('url')}
          className={classNames(
            'd-flex align-items-center cursor-pointer',
            styles.loadingOption,
            {
              [styles.active]: type === 'url',
            }
          )}
        >
          <BsCloud className="w-25" />
          <h4 className="m-0 d-inline-block">{t('customChartLoader.importFromUrl')}</h4>
        </div>
        <div
          onClick={() => changeImportType('npm')}
          className={classNames(
            'd-flex align-items-center cursor-pointer',
            styles.loadingOption,
            {
              [styles.active]: type === 'npm',
            }
          )}
        >
          <BsCloud className="w-25" />
          <h4 className="m-0 d-inline-block">{t('customChartLoader.importFromNpm')}</h4>
        </div>
      </div>
      <div className="col-md-8">
        {type === 'npm' && (
          <LoadFromString
            loading={loading}
            load={(pkg) => {
              setError(null)
              setLoading(true)
              loadCustomChartsFromNpm(pkg).then(onClose, handleError)
            }}
            key="npm"
            placeholder={t('customChartLoader.placeholderNpm')}
            t={t}
          />
        )}
        {type === 'url' && (
          <LoadFromString
            loading={loading}
            load={(url) => {
              setError(null)
              setLoading(true)
              loadCustomChartsFromUrl(url).then(onClose, handleError)
            }}
            key="url"
            placeholder={t('customChartLoader.placeholderUrl')}
            t={t}
          />
        )}
        {type === 'file' && (
          <LoadFromFile
            loading={loading}
            load={(url) => {
              setError(null)
              setLoading(true)
              uploadCustomCharts(url).then(onClose, handleError)
            }}
            key="url"
            placeholder={t('customChartLoader.placeholderUrl')}
            t={t}
          />
        )}
        {error && (
          <div className="alert alert-danger mt-2">
            {t('customChartLoader.importError')}
          </div>
        )}
      </div>
    </div>
  )
}

function CustomChartLoader({ isOpen, onClose, ...props }) {
  const { t } = useTranslation()
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      backdrop="static"
      centered
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="raw-modal"
      contentClassName="bg-white"
    >
      <Modal.Header closeButton>
        <Modal.Title>{t('customChartLoader.title')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <CustomChartLoaderForm {...props} onClose={onClose} t={t} />
      </Modal.Body>
      <Modal.Footer>
        <div className='text-center w-100'>
          {t('customChartLoader.documentation')}{' '}
          <a href="https://rawgraphs.io" target="_blank" rel="noreferrer">
            {t('customChartLoader.checkDocs')}
          </a>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default memo(CustomChartLoader)
