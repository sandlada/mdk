export class Variant<K extends string, V extends number> {
    public readonly Key  : K
    public readonly Value: V

    public toJSON() {
        return ({
            Key  : this.Key,
            Value: this.Value
        })
    }

    private constructor(Key: K, Value: V) {
        this.Key   = Key
        this.Value = Value
    }

    public static readonly Monochrome = new Variant('Monochrome', 0)
    public static readonly Neutral    = new Variant('Neutral',    1)
    public static readonly TonalSpot  = new Variant('TonalSpot',  2)
    public static readonly Vibrant    = new Variant('Vibrant',    3)
    public static readonly Expressive = new Variant('Expressive', 4)
    public static readonly Fidelity   = new Variant('Fidelity',   5)
    public static readonly Content    = new Variant('Content',    6)
    public static readonly Rainbow    = new Variant('Rainbow',    7)
    public static readonly FruitSalad = new Variant('FruitSalad', 8)

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

}
