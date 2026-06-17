import type { ICSSDeclaration } from '../interfaces/css-declaration.interface'

export class Typeface<K extends string, V extends number | string> implements ICSSDeclaration<K, V, `${K}: ${V}${';' | ''}`> {
    public readonly Key  : K
    public readonly Value: V

    public toJSON() { return ({ Key: this.Key, Value: this.Value }) }
    public ToCSSDeclaration({ Semicolon = false, WrapVariable = false }: { Semicolon?: boolean, WrapVariable?: boolean } = {}): string {
        return WrapVariable
            ? `var(${this.Key}, ${this.Value})`
            : `${this.Key}: ${this.Value}${Semicolon ? ';' : ''}`
    }
    public toString() { return this.ToCSSDeclaration() }

    private constructor(Key: K, Value: V) {
        this.Key   = Key
        this.Value = Value
    }

    public static readonly FontBrand     = new Typeface('--md-ref-typeface-font-brand',     `Roboto`)
    public static readonly FontPlain     = new Typeface('--md-ref-typeface-font-plain',     `Roboto`)
    public static readonly WeightBold    = new Typeface('--md-ref-typeface-weight-bold',    700)
    public static readonly WeightMedium  = new Typeface('--md-ref-typeface-weight-medium',  500)
    public static readonly WeightRegular = new Typeface('--md-ref-typeface-weight-regular', 400)

    public static readonly AllEnums = {
        FontBrand : this.FontBrand,  FontPlain   : this.FontPlain,
        WeightBold: this.WeightBold, WeightMedium: this.WeightMedium, WeightRegular: this.WeightRegular,
    } as const

}
