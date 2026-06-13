export class Typeface<K extends string, V extends number | string> implements ICSSDeclaration<K, V, `${K}: ${V}${';' | ''}`> {
    public readonly key  : K
    public readonly value: V

    public toJSON() { return ({ key: this.key, value: this.value }) }
    public toCSSDeclaration(semicolon: boolean = false): `${K}: ${V}${';' | ''}` { return `${this.key}: ${this.value}${semicolon ? ';' : ''}` }
    public toString() { return this.toCSSDeclaration() }

    private constructor(key: K, value: V) {
        this.key   = key
        this.value = value
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
