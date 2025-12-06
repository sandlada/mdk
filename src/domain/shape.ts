import type { IValueObject } from "../primitives/IValueObject"
import type { ICSSValue } from "../primitives/ICSSValue"

export class Shape<K extends string, V extends number, U extends string> implements IValueObject<V>, ICSSValue {
    private constructor(
        public readonly key: K,
        public readonly value: V,
        public readonly unit: U
    ) {}

    private static of<K extends string, V extends number, U extends string>(key: K, value: V, unit: U): Shape<K, V, U> {
        return new Shape<K, V, U>(key, value, unit)
    }

    public static readonly None                = Shape.of('none', 0, 'px')
    public static readonly ExtraSmall          = Shape.of('extra-small', 4, 'px')
    public static readonly Small               = Shape.of('small', 8, 'px')
    public static readonly Medium              = Shape.of('medium', 12, 'px')
    public static readonly Large               = Shape.of('large', 16, 'px')
    public static readonly LargeIncreased      = Shape.of('large-increased', 20, 'px')
    public static readonly ExtraLarge          = Shape.of('extra-large', 28, 'px')
    public static readonly ExtraLargeIncreased = Shape.of('extra-large-increased', 32, 'px')
    public static readonly ExtraExtraLarge     = Shape.of('extra-extra-large', 48, 'px')

    public toCSSValue(): `var(--md-sys-shape-corner-${K}, ${V}${U})` {
        return `var(--md-sys-shape-corner-${this.key}, ${this.value}${this.unit})`
    }

    public toString() {
        return this.toCSSValue()
    }

}
