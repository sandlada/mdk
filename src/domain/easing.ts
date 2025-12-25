import type { ICSSValue } from "../primitives/ICSSValue"
import type { IValueObject } from "../primitives/IValueObject"

export class Easing<T extends Readonly<[number, number, number, number]>> implements IValueObject<T>, ICSSValue {
    public readonly value: T

    private constructor(value: T) {
        this.value = value
    }

    private static of<V extends Readonly<[number, number, number, number]>>(value: V): Easing<V> { 
        return new Easing<V>(value)
    }

    public static readonly Standard                 = Easing.of([0.20, 0.00, 0.0, 1.00] as const)
    public static readonly StandardAccelerate       = Easing.of([0.30, 0.00, 1.0, 1.00] as const)
    public static readonly StandardDecelerate       = Easing.of([0.00, 0.00, 0.0, 1.00] as const)
    public static readonly Emphasized               = Easing.of([0.20, 0.00, 0.0, 1.00] as const)
    public static readonly EmphasizedAccelerate     = Easing.of([0.30, 0.00, 0.8, 0.15] as const)
    public static readonly EmphasizedDecelerate     = Easing.of([0.05, 0.70, 0.1, 1.00] as const)
    public static readonly Legacy                   = Easing.of([0.40, 0.00, 0.2, 1.00] as const)
    public static readonly LegacyAccelerate         = Easing.of([0.40, 0.00, 1.0, 1.00] as const)
    public static readonly LegacyDecelerate         = Easing.of([0.00, 0.00, 0.2, 1.00] as const)
    public static readonly Linear                   = Easing.of([0.00, 0.00, 1.0, 1.00] as const)
    public static readonly ExpressiveFastSpatial    = Easing.of([0.42, 1.67, 0.21, 0.90] as const)
    public static readonly ExpressiveDefaultSpatial = Easing.of([0.38, 1.21, 0.22, 1.00] as const)
    public static readonly ExpressiveSlowSpatial    = Easing.of([0.39, 1.29, 0.35, 0.98] as const)
    public static readonly ExpressiveFastEffects    = Easing.of([0.31, 0.94, 0.34, 1.00] as const)
    public static readonly ExpressiveDefaultEffects = Easing.of([0.34, 0.80, 0.34, 1.00] as const)
    public static readonly ExpressiveSlowEffects    = Easing.of([0.34, 0.88, 0.34, 1.00] as const)
    public static readonly StandardFastSpatial      = Easing.of([0.27, 1.06, 0.18, 1.00] as const)
    public static readonly StandardDefaultSpatial   = Easing.of([0.27, 1.06, 0.18, 1.00] as const)
    public static readonly StandardSlowSpatial      = Easing.of([0.27, 1.06, 0.18, 1.00] as const)
    public static readonly StandardFastEffects      = Easing.of([0.31, 0.94, 0.34, 1.00] as const)
    public static readonly StandardDefaultEffects   = Easing.of([0.34, 0.80, 0.34, 1.00] as const)
    public static readonly StandardSlowEffects      = Easing.of([0.34, 0.88, 0.34, 1.00] as const)

    public toCSSValue(): `cubic-bezier(${T[0]}, ${T[1]}, ${T[2]}, ${T[3]})` {
        return `cubic-bezier(${this.value[0]}, ${this.value[1]}, ${this.value[2]}, ${this.value[3]})`
    }

    public toString() {
        return this.toCSSValue()
    }

}
