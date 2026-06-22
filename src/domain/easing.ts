import type { ICSSDeclaration } from '../interfaces/css-declaration.interface'

type EasingDeclaration<K extends string, T extends Readonly<[number, number, number, number]>> = `${K}: cubic-bezier(${T[0]}, ${T[1]}, ${T[2]}, ${T[3]})${';' | ''}`
type EasingVariable<K extends string, T extends Readonly<[number, number, number, number]>> = `var(${K}, cubic-bezier(${T[0]}, ${T[1]}, ${T[2]}, ${T[3]}))`

export class Easing<K extends string, T extends Readonly<[number, number, number, number]>> implements ICSSDeclaration<K, T, EasingDeclaration<K, T>, EasingVariable<K, T>> {
    public readonly Key: K
    public readonly Value: T

    public toJSON() { return ({ Key: this.Key, Value: this.Value }) }
    public ToCSSDeclaration(): `${K}: cubic-bezier(${T[0]}, ${T[1]}, ${T[2]}, ${T[3]})`
    public ToCSSDeclaration(options: { Semicolon: true }): `${K}: cubic-bezier(${T[0]}, ${T[1]}, ${T[2]}, ${T[3]});`
    public ToCSSDeclaration(options?: { Semicolon?: boolean }): `${K}: cubic-bezier(${T[0]}, ${T[1]}, ${T[2]}, ${T[3]})${';' | ''}`
    public ToCSSDeclaration({ Semicolon = false }: { Semicolon?: boolean } = {}): `${K}: cubic-bezier(${T[0]}, ${T[1]}, ${T[2]}, ${T[3]})${';' | ''}` {
        const Value = `cubic-bezier(${this.Value[0]}, ${this.Value[1]}, ${this.Value[2]}, ${this.Value[3]})`
        return `${this.Key}: ${Value}${Semicolon ? ';' : ''}` as `${K}: cubic-bezier(${T[0]}, ${T[1]}, ${T[2]}, ${T[3]})${';' | ''}`
    }
    public ToCSSVariable(): `var(${K}, cubic-bezier(${T[0]}, ${T[1]}, ${T[2]}, ${T[3]}))`
    public ToCSSVariable(): `var(${K}, cubic-bezier(${T[0]}, ${T[1]}, ${T[2]}, ${T[3]}))` {
        const Value = `cubic-bezier(${this.Value[0]}, ${this.Value[1]}, ${this.Value[2]}, ${this.Value[3]})`
        return `var(${this.Key}, ${Value})` as `var(${K}, cubic-bezier(${T[0]}, ${T[1]}, ${T[2]}, ${T[3]}))`
    }
    public toString() { return this.ToCSSDeclaration() }

    private constructor(Key: K, Value: T) {
        this.Key = Key
        this.Value = Value
    }

    public static readonly Standard                 = new Easing('--md-sys-motion-easing-standard',                   [0.20, 0.00, 0.00, 1.00] as const)
    public static readonly StandardAccelerate       = new Easing('--md-sys-motion-easing-standard-accelerate',        [0.30, 0.00, 1.00, 1.00] as const)
    public static readonly StandardDecelerate       = new Easing('--md-sys-motion-easing-standard-decelerate',        [0.00, 0.00, 0.00, 1.00] as const)
    public static readonly Emphasized               = new Easing('--md-sys-motion-easing-emphasized',                 [0.20, 0.00, 0.00, 1.00] as const)
    public static readonly EmphasizedAccelerate     = new Easing('--md-sys-motion-easing-emphasized-accelerate',      [0.30, 0.00, 0.80, 0.15] as const)
    public static readonly EmphasizedDecelerate     = new Easing('--md-sys-motion-easing-emphasized-decelerate',      [0.05, 0.70, 0.10, 1.00] as const)
    public static readonly Legacy                   = new Easing('--md-sys-motion-easing-legacy',                     [0.40, 0.00, 0.20, 1.00] as const)
    public static readonly LegacyAccelerate         = new Easing('--md-sys-motion-easing-legacy-accelerate',          [0.40, 0.00, 1.00, 1.00] as const)
    public static readonly LegacyDecelerate         = new Easing('--md-sys-motion-easing-legacy-decelerate',          [0.00, 0.00, 0.20, 1.00] as const)
    public static readonly Linear                   = new Easing('--md-sys-motion-easing-linear',                     [0.00, 0.00, 1.00, 1.00] as const)
    public static readonly ExpressiveFastSpatial    = new Easing('--md-sys-motion-easing-expressive-fast-spatial',    [0.42, 1.67, 0.21, 0.90] as const)
    public static readonly ExpressiveDefaultSpatial = new Easing('--md-sys-motion-easing-expressive-default-spatial', [0.38, 1.21, 0.22, 1.00] as const)
    public static readonly ExpressiveSlowSpatial    = new Easing('--md-sys-motion-easing-expressive-slow-spatial',    [0.39, 1.29, 0.35, 0.98] as const)
    public static readonly ExpressiveFastEffects    = new Easing('--md-sys-motion-easing-expressive-fast-effects',    [0.31, 0.94, 0.34, 1.00] as const)
    public static readonly ExpressiveDefaultEffects = new Easing('--md-sys-motion-easing-expressive-default-effects', [0.34, 0.80, 0.34, 1.00] as const)
    public static readonly ExpressiveSlowEffects    = new Easing('--md-sys-motion-easing-expressive-slow-effects',    [0.34, 0.88, 0.34, 1.00] as const)
    public static readonly StandardFastSpatial      = new Easing('--md-sys-motion-easing-standard-fast-spatial',      [0.27, 1.06, 0.18, 1.00] as const)
    public static readonly StandardDefaultSpatial   = new Easing('--md-sys-motion-easing-standard-default-spatial',   [0.27, 1.06, 0.18, 1.00] as const)
    public static readonly StandardSlowSpatial      = new Easing('--md-sys-motion-easing-standard-slow-spatial',      [0.27, 1.06, 0.18, 1.00] as const)
    public static readonly StandardFastEffects      = new Easing('--md-sys-motion-easing-standard-fast-effects',      [0.31, 0.94, 0.34, 1.00] as const)
    public static readonly StandardDefaultEffects   = new Easing('--md-sys-motion-easing-standard-default-effects',   [0.34, 0.80, 0.34, 1.00] as const)
    public static readonly StandardSlowEffects      = new Easing('--md-sys-motion-easing-standard-slow-effects',      [0.34, 0.88, 0.34, 1.00] as const)

    public static readonly AllEnums = {
        Standard             : this.Standard,              StandardAccelerate      : this.StandardAccelerate,       StandardDecelerate   : this.StandardDecelerate,
        Emphasized           : this.Emphasized,            EmphasizedAccelerate    : this.EmphasizedAccelerate,     EmphasizedDecelerate : this.EmphasizedDecelerate,
        Legacy               : this.Legacy,                LegacyAccelerate        : this.LegacyAccelerate,         LegacyDecelerate     : this.LegacyDecelerate,
        Linear               : this.Linear,
        ExpressiveFastSpatial: this.ExpressiveFastSpatial, ExpressiveDefaultSpatial: this.ExpressiveDefaultSpatial, ExpressiveSlowSpatial: this.ExpressiveSlowSpatial,
        ExpressiveFastEffects: this.ExpressiveFastEffects, ExpressiveDefaultEffects: this.ExpressiveDefaultEffects, ExpressiveSlowEffects: this.ExpressiveSlowEffects,
        StandardFastSpatial  : this.StandardFastSpatial,   StandardDefaultSpatial  : this.StandardDefaultSpatial,   StandardSlowSpatial  : this.StandardSlowSpatial,
        StandardFastEffects  : this.StandardFastEffects,   StandardDefaultEffects  : this.StandardDefaultEffects,   StandardSlowEffects  : this.StandardSlowEffects,
    } as const

}