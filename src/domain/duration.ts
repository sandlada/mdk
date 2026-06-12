import type { ICSSValue } from "../primitives/ICSSValue"
import type { IValueObject } from "../primitives/IValueObject"

export class Duration<T extends number> implements ICSSValue, IValueObject<T> {
    public readonly value: T

    private constructor(value: T) {
        this.value = value
    }

    private static of<T extends number>(ms: T): Duration<T> {
        return new Duration(ms)
    }

    public static readonly Short1     = Duration.of(50)
    public static readonly Short2     = Duration.of(100)
    public static readonly Short3     = Duration.of(150)
    public static readonly Short4     = Duration.of(200)
    public static readonly Medium1    = Duration.of(250)
    public static readonly Medium2    = Duration.of(300)
    public static readonly Medium3    = Duration.of(350)
    public static readonly Medium4    = Duration.of(400)
    public static readonly Long1      = Duration.of(450)
    public static readonly Long2      = Duration.of(500)
    public static readonly Long3      = Duration.of(550)
    public static readonly Long4      = Duration.of(600)
    public static readonly ExtraLong1 = Duration.of(700)
    public static readonly ExtraLong2 = Duration.of(800)
    public static readonly ExtraLong3 = Duration.of(900)
    public static readonly ExtraLong4 = Duration.of(1000)

    public static readonly ExpressiveFastSpatial    = Duration.of(350)
    public static readonly ExpressiveDefaultSpatial = Duration.of(500)
    public static readonly ExpressiveSlowSpatial    = Duration.of(650)
    public static readonly ExpressiveFastEffects    = Duration.of(150)
    public static readonly ExpressiveDefaultEffects = Duration.of(200)
    public static readonly ExpressiveSlowEffects    = Duration.of(300)
    public static readonly StandardFastSpatial      = Duration.of(350)
    public static readonly StandardDefaultSpatial   = Duration.of(500)
    public static readonly StandardSlowSpatial      = Duration.of(750)
    public static readonly StandardFastEffects      = Duration.of(150)
    public static readonly StandardDefaultEffects   = Duration.of(200)
    public static readonly StandardSlowEffects      = Duration.of(300)

    public toCSSValue(): `${T}ms` {
        return `${this.value}ms`
    }

    public toString() {
        return this.toCSSValue()
    }

    public static readonly AllEnums = {
        Short1: this.Short1, Short2: this.Short2, Short3: this.Short3, Short4: this.Short4,
        Medium1: this.Medium1, Medium2: this.Medium2, Medium3: this.Medium3, Medium4: this.Medium4,
        Long1: this.Long1, Long2: this.Long2, Long3: this.Long3, Long4: this.Long4,
        ExtraLong1: this.ExtraLong1, ExtraLong2: this.ExtraLong2, ExtraLong3: this.ExtraLong3, ExtraLong4: this.ExtraLong4,
        ExpressiveFastSpatial: this.ExpressiveFastSpatial, ExpressiveDefaultSpatial: this.ExpressiveDefaultSpatial, ExpressiveSlowSpatial: this.ExpressiveSlowSpatial,
        ExpressiveFastEffects: this.ExpressiveFastEffects, ExpressiveDefaultEffects: this.ExpressiveDefaultEffects, ExpressiveSlowEffects: this.ExpressiveSlowEffects,
        StandardFastSpatial: this.StandardFastSpatial, StandardDefaultSpatial: this.StandardDefaultSpatial, StandardSlowSpatial: this.StandardSlowSpatial,
        StandardFastEffects: this.StandardFastEffects, StandardDefaultEffects: this.StandardDefaultEffects, StandardSlowEffects: this.StandardSlowEffects,
    } as const

    public static readonly AllValues = [
        this.Short1, this.Short2, this.Short3, this.Short4,
        this.Medium1, this.Medium2, this.Medium3, this.Medium4,
        this.Long1, this.Long2, this.Long3, this.Long4,
        this.ExtraLong1, this.ExtraLong2, this.ExtraLong3, this.ExtraLong4,
        this.ExpressiveFastSpatial, this.ExpressiveDefaultSpatial, this.ExpressiveSlowSpatial,
        this.ExpressiveFastEffects, this.ExpressiveDefaultEffects, this.ExpressiveSlowEffects,
        this.StandardFastSpatial, this.StandardDefaultSpatial, this.StandardSlowSpatial,
        this.StandardFastEffects, this.StandardDefaultEffects, this.StandardSlowEffects,
     ] as const

    public static readonly AllKeys = Duration.AllValues.map((duration) => duration.value)

}
