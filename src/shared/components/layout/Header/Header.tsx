import { Icon } from '@components/ui'
import { EIcons } from '@components/ui/Icon/iconsList'
import React from 'react'

import styles from './header.sass'

export function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <span>
                    <Icon icon={EIcons.logo} width={50} />
                </span>
                <span>pomodoro_box</span>
            </div>
            <div className={styles.item}>
                <Icon
                    icon={EIcons.statistic}
                    width={16}
                    height={16}
                    fill={'#DC3E22'}
                    stroke={'#DC3E22'}
                />
                <span>Статистика</span>
            </div>
        </div>
    )
}
