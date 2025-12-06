import type { ICSSValue } from "../primitives/ICSSValue"

class FontCSSValue<K extends string, V extends number | string> implements ICSSValue {
    private constructor(
        public readonly key: K, 
        public readonly value: V
    ) {}

    public static of<K extends string, V extends number | string>(key: K, value: V) {
        return new FontCSSValue(key, value)
    }

    public toCSSValue(): `var(--md-sys-typeface-${K}, ${V})` {
        return `var(--md-sys-typeface-${this.key}, ${this.value})`
    }

    public toString() {
        return this.toCSSValue()
    }
}

export const Typeface = {
    FontBrand    : FontCSSValue.of('font-brand', `"Roboto"`),
    FontPlain    : FontCSSValue.of('font-plain', `"Roboto"`),
    WeightBold   : FontCSSValue.of('weight-bold', 700),
    WeightMedium : FontCSSValue.of('weight-medium', 500),
    WeightRegular: FontCSSValue.of('weight-regular', 400),
} as const
