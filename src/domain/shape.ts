import type { ICSSDeclaration } from '../types'

type ShapeDeclaration<K extends string, V extends number | string, U extends string> = `${K}: ${V}${U}${';' | ''}`

export class Shape<
    K extends string,
    V extends number | string,
    U extends string
> implements ICSSDeclaration<K, V, ShapeDeclaration<K, V, U>> {
    public readonly key  : K
    public readonly value: V
    public readonly unit : U

    public toJSON() { return ({ key: this.key, value: this.value, unit: this.unit }) }
    public toCSSDeclaration({ semicolon = false, wrapVariable = false }: { semicolon?: boolean, wrapVariable?: boolean } = {}): string {
        return wrapVariable
            ? `var(${this.key}, ${this.value}${this.unit})`
            : `${this.key}: ${this.value}${this.unit}${semicolon ? ';' : ''}`
    }
    public toString() { return this.toCSSDeclaration() }

    private constructor(key: K, value: V, unit: U) {
        this.key   = key
        this.value = value
        this.unit  = unit
    }

    public static readonly None                = new Shape('--md-sys-shape-corner-none',                  0,                      'px')
    public static readonly ExtraSmall          = new Shape('--md-sys-shape-corner-extra-small',           4,                      'px')
    public static readonly Small               = new Shape('--md-sys-shape-corner-small',                 8,                      'px')
    public static readonly Medium              = new Shape('--md-sys-shape-corner-medium',                12,                     'px')
    public static readonly Large               = new Shape('--md-sys-shape-corner-large',                 16,                     'px')
    public static readonly LargeIncreased      = new Shape('--md-sys-shape-corner-large-increased',       20,                     'px')
    public static readonly ExtraLarge          = new Shape('--md-sys-shape-corner-extra-large',           28,                     'px')
    public static readonly ExtraLargeIncreased = new Shape('--md-sys-shape-corner-extra-large-increased', 32,                     'px')
    public static readonly ExtraExtraLarge     = new Shape('--md-sys-shape-corner-extra-extra-large',     48,                     'px')
    public static readonly Full                = new Shape('--md-sys-shape-corner-full',                  'calc(infinity * 1px)', '')

    public static readonly AllEnums = {
        None               : Shape.None,
        ExtraSmall         : Shape.ExtraSmall,
        Small              : Shape.Small,
        Medium             : Shape.Medium,
        Large              : Shape.Large,
        LargeIncreased     : Shape.LargeIncreased,
        ExtraLarge         : Shape.ExtraLarge,
        ExtraLargeIncreased: Shape.ExtraLargeIncreased,
        ExtraExtraLarge    : Shape.ExtraExtraLarge,
        Full               : Shape.Full
    } as const

}
