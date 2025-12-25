import type { ICSSValue } from "../primitives/ICSSValue"

export class Typeface<K extends string, V extends number | string> implements ICSSValue {
    public readonly key  : K
    public readonly value: V

    private constructor(key: K, value: V) {
        this.key   = key
        this.value = value
    }

    private static of<K extends string, V extends number | string>(key: K, value: V) {
        return new Typeface(key, value)
    }

    public toCSSValue(): `var(--md-sys-typeface-${K}, ${V})` {
        return `var(--md-sys-typeface-${this.key}, ${this.value})`
    }

    public toString() {
        return this.toCSSValue()
    }
    
    public static readonly FontBrand     = Typeface.of('font-brand', `"Roboto"`)
    public static readonly FontPlain     = Typeface.of('font-plain', `"Roboto"`)
    public static readonly WeightBold    = Typeface.of('weight-bold', 700)
    public static readonly WeightMedium  = Typeface.of('weight-medium', 500)
    public static readonly WeightRegular = Typeface.of('weight-regular', 400)
}
