import React from 'react'

import styles from './layout.sass'

import {ILayoutProps} from '@components/layout/Layout/layout.types'

export function Layout({children}: ILayoutProps) {
    return <div className={styles.container}>{children}</div>
}
