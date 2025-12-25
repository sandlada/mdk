import type { IValueObject } from "../primitives/IValueObject"

export class Variant<K extends string, V extends number> implements IValueObject<V> {
    public readonly key  : K
    public readonly value: V

    private constructor(key: K, value: V) {
        this.key   = key
        this.value = value
    }

    private static of<K extends string, V extends number>(key: K, value: V) {
        return new Variant(key, value)
    }

    public static readonly Monochrome = Variant.of('Monochrome', 0)
    public static readonly Neutral    = Variant.of('Neutral', 1)
    public static readonly TonalSpot  = Variant.of('TonalSpot', 2)
    public static readonly Vibrant    = Variant.of('Vibrant', 3)
    public static readonly Expressive = Variant.of('Expressive', 4)
    public static readonly Fidelity   = Variant.of('Fidelity', 5)
    public static readonly Content    = Variant.of('Content', 6)
    public static readonly Rainbow    = Variant.of('Rainbow', 7)
    public static readonly FruitSalad = Variant.of('FruitSalad', 8)

}