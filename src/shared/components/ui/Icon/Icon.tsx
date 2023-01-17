import { iconsList } from '@components/ui/Icon/iconsList'
import React from 'react'
import styles from './icon.css'

import { IIconProps } from './icon.types'

export function Icon({
    icon,
    height = '100%',
    width,
    stroke = '#000',
    fill = '#000',
}: IIconProps) {
    let [symbol] = iconsList.filter(elem => elem.name === icon)

    return (
        <svg
            viewBox={symbol.symbol.viewBox}
            height={20}
            width={20}
            className={styles.icon}
            stroke={stroke}
            fill={fill}
        >
            <use xlinkHref={`#${symbol.symbol.id}`} />
        </svg>
    )
}
