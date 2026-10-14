import { CSSToken } from './css-token.js'

export class Shape<K extends string, V extends number | string, U extends string> extends CSSToken<K, V, U> {
    public static readonly None = new Shape('--md-sys-shape-corner-none', 0, 'px')
    public static readonly ExtraSmall = new Shape('--md-sys-shape-corner-extra-small', 4, 'px')
    public static readonly Small = new Shape('--md-sys-shape-corner-small', 8, 'px')
    public static readonly Medium = new Shape('--md-sys-shape-corner-medium', 12, 'px')
    public static readonly Large = new Shape('--md-sys-shape-corner-large', 16, 'px')
    public static readonly LargeIncreased = new Shape('--md-sys-shape-corner-large-increased', 20, 'px')
    public static readonly ExtraLarge = new Shape('--md-sys-shape-corner-extra-large', 28, 'px')
    public static readonly ExtraLargeIncreased = new Shape('--md-sys-shape-corner-extra-large-increased', 32, 'px')
    public static readonly ExtraExtraLarge = new Shape('--md-sys-shape-corner-extra-extra-large', 48, 'px')
    public static readonly Full = new Shape('--md-sys-shape-corner-full', 'calc(infinity * 1px)', '')

    public static readonly AllEnums = {
        None: Shape.None,
        ExtraSmall: Shape.ExtraSmall,
        Small: Shape.Small,
        Medium: Shape.Medium,
        Large: Shape.Large,
        LargeIncreased: Shape.LargeIncreased,
        ExtraLarge: Shape.ExtraLarge,
        ExtraLargeIncreased: Shape.ExtraLargeIncreased,
        ExtraExtraLarge: Shape.ExtraExtraLarge,
        Full: Shape.Full
    } as const
}
