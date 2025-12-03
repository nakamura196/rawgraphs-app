import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Header.module.scss'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header({ menuItems }) {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <Navbar bg="white" expand="lg" sticky="top" className={styles.navbar}>
      <Navbar.Brand href="/"><b>RAW</b><span className="text-primary">Graphs</span> 2.0</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {menuItems.map((d, i) => {
            return (
              <Nav.Link key={'item' + i} href={d.href}>
                {d.label}
              </Nav.Link>
            )
          })}
          <a
            role="button"
            href="https://github.com/rawgraphs/rawgraphs-app/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary ml-2 d-flex flex-column align-items-center justify-content-center"
          >
            {t('header.reportIssue')}
          </a>
          <a
            role="button"
            href="https://github.com/sponsors/rawgraphs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary ml-2 d-flex flex-column align-items-center justify-content-center"
          >
            {t('header.supportUs')}
          </a>
          <div className="ml-3 d-flex align-items-center">
            <button
              onClick={() => changeLanguage('en')}
              className={`btn btn-sm ${i18n.language === 'en' ? 'btn-secondary' : 'btn-outline-secondary'}`}
              style={{ padding: '2px 8px', fontSize: '12px' }}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('ja')}
              className={`btn btn-sm ml-1 ${i18n.language === 'ja' ? 'btn-secondary' : 'btn-outline-secondary'}`}
              style={{ padding: '2px 8px', fontSize: '12px' }}
            >
              JA
            </button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
