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

    public static readonly AllEnums = {
        Monochrome: Variant.Monochrome,
        Neutral   : Variant.Neutral,
        TonalSpot : Variant.TonalSpot,
        Vibrant   : Variant.Vibrant,
        Expressive: Variant.Expressive,
        Fidelity  : Variant.Fidelity,
        Content   : Variant.Content,
        Rainbow   : Variant.Rainbow,
        FruitSalad: Variant.FruitSalad
    } as const

    public static readonly AllValues = [
        Variant.Monochrome,
        Variant.Neutral,
        Variant.TonalSpot,
        Variant.Vibrant,
        Variant.Expressive,
        Variant.Fidelity,
        Variant.Content,
        Variant.Rainbow,
        Variant.FruitSalad
    ] as const

    public static readonly AllKeys = Variant.AllValues.map(v => v.key)

}
