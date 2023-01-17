import { logo, statistic } from '@assets/icons'
import { BrowserSpriteSymbol, IIconsList } from './icon.types'

export const iconsList: Array<IIconsList> = [
    { name: 'logo', symbol: logo },
    { name: 'statistic', symbol: statistic },
]

export enum EIcons {
    logo = 'logo',
    statistic = 'statistic',
}
