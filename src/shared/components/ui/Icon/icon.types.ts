import { EIcons, iconsList } from '@components/ui/Icon/iconsList'

export interface BrowserSpriteSymbol {
    id: string
    viewBox: string
    content: string
    node: SVGSymbolElement
}

export interface IIconsList {
    name: string
    symbol: BrowserSpriteSymbol
}

export interface IIconProps {
    icon: EIcons
    width: number | string
    height?: number | string
    fill?: string
    stroke?: string
}
