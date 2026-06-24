import type { ICSSDeclaration } from '../interfaces/css-declaration.interface'

type ShapeDeclaration<K extends string, V extends number | string, U extends string> = `${K}: ${V}${U}${';' | ''}`
type ShapeVariable<K extends string, V extends number | string, U extends string> = `var(${K}, ${V}${U})`

export class Shape<
    K extends string,
    V extends number | string,
    U extends string
> implements ICSSDeclaration<K, V, ShapeDeclaration<K, V, U>, ShapeVariable<K, V, U>> {
    public readonly Key  : K
    public readonly Value: V
    public readonly Unit : U

    public toJSON() { return ({ Key: this.Key, Value: this.Value, Unit: this.Unit }) }
    public ToCSSDeclaration(): `${K}: ${V}${U}`
    public ToCSSDeclaration(options: { Semicolon: true }): `${K}: ${V}${U};`
    public ToCSSDeclaration(options?: { Semicolon?: boolean }): `${K}: ${V}${U}${';' | ''}`
    public ToCSSDeclaration({ Semicolon = false }: { Semicolon?: boolean } = {}): `${K}: ${V}${U}${';' | ''}` {
        return `${this.Key}: ${this.Value}${this.Unit}${Semicolon ? ';' : ''}`
    }
    public ToCSSVariable(): `var(${K}, ${V}${U})`
    public ToCSSVariable(): `var(${K}, ${V}${U})` {
        return `var(${this.Key}, ${this.Value}${this.Unit})`
    }
    public ToCSSValue() {
        return `${this.Value}${this.Unit}`
    }
    public toString() { return this.ToCSSDeclaration() }

    private constructor(Key: K, Value: V, Unit: U) {
        this.Key   = Key
        this.Value = Value
        this.Unit  = Unit
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
