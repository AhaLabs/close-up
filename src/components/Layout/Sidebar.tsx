import React from 'react'
import { Login, Logo, Methods } from '..'
import css from './sidebar.module.css'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export const Sidebar: React.FC<React.PropsWithChildren<unknown>> = () => {
  const { isMobile } = useWindowDimensions()
  return (
    <div className={`bokeh ${css.sidebar}`}>
      {!isMobile && (
        <div className={css.nav}>
          <div className={css.logo}>
            <Logo padding="var(--spacing-xs) 0 var(--spacing-m)" />
          </div>
          <Login />
        </div>
      )}
      {isMobile && <div className={css.arrow} />}
      <Methods />
    </div>
  )
}
