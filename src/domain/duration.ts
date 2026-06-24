import type { ICSSDeclaration } from '../interfaces/css-declaration.interface'

export class Duration<K extends string, V extends number, U extends string = 'ms'> implements ICSSDeclaration<K, V, `${K}: ${V}${U}${';' | ''}`, `var(${K}, ${V}${U})`> {
    public readonly Key: K
    public readonly Value: V
    public readonly Unit: U

    public toJSON() { return ({ Key: this.Key, Value: this.Value, Unit: this.Unit }) }
    public ToCSSDeclaration(): `${K}: ${V}${U}`
    public ToCSSDeclaration(options: { Semicolon: true }): `${K}: ${V}${U};`
    public ToCSSDeclaration(options?: { Semicolon?: boolean }): `${K}: ${V}${U}${';' | ''}`
    public ToCSSDeclaration({ Semicolon = false }: { Semicolon?: boolean } = {}): `${K}: ${V}${U}${';' | ''}` {
        return `${this.Key}: ${this.Value}${this.Unit}${Semicolon ? ';' : ''}`
    }
    public ToCSSVariable(): `var(${K}, ${V}${U})`
    public ToCSSVariable(): `var(${K}, ${V}${U})` {
        return `var(${this.Key}, ${this.Value}${this.Unit})`
    }

    public ToCSSValue() {
        return `${this.Value}${this.Unit}`
    }

    public toString() { return this.ToCSSDeclaration() }

    private constructor(Key: K, Value: V, Unit: U) {
        this.Key = Key
        this.Value = Value
        this.Unit = Unit
    }

    public static readonly Short1                   = new Duration('--md-sys-motion-duration-short1', 50, 'ms')
    public static readonly Short2                   = new Duration('--md-sys-motion-duration-short2', 100, 'ms')
    public static readonly Short3                   = new Duration('--md-sys-motion-duration-short3', 150, 'ms')
    public static readonly Short4                   = new Duration('--md-sys-motion-duration-short4', 200, 'ms')
    public static readonly Medium1                  = new Duration('--md-sys-motion-duration-medium1', 250, 'ms')
    public static readonly Medium2                  = new Duration('--md-sys-motion-duration-medium2', 300, 'ms')
    public static readonly Medium3                  = new Duration('--md-sys-motion-duration-medium3', 350, 'ms')
    public static readonly Medium4                  = new Duration('--md-sys-motion-duration-medium4', 400, 'ms')
    public static readonly Long1                    = new Duration('--md-sys-motion-duration-long1', 450, 'ms')
    public static readonly Long2                    = new Duration('--md-sys-motion-duration-long2', 500, 'ms')
    public static readonly Long3                    = new Duration('--md-sys-motion-duration-long3', 550, 'ms')
    public static readonly Long4                    = new Duration('--md-sys-motion-duration-long4', 600, 'ms')
    public static readonly ExtraLong1               = new Duration('--md-sys-motion-duration-extra-long1', 700, 'ms')
    public static readonly ExtraLong2               = new Duration('--md-sys-motion-duration-extra-long2', 800, 'ms')
    public static readonly ExtraLong3               = new Duration('--md-sys-motion-duration-extra-long3', 900, 'ms')
    public static readonly ExtraLong4               = new Duration('--md-sys-motion-duration-extra-long4', 1000, 'ms')
    public static readonly ExpressiveFastSpatial    = new Duration('--md-sys-motion-duration-expressive-fast-spatial', 350, 'ms')
    public static readonly ExpressiveDefaultSpatial = new Duration('--md-sys-motion-duration-expressive-default-spatial', 500, 'ms')
    public static readonly ExpressiveSlowSpatial    = new Duration('--md-sys-motion-duration-expressive-slow-spatial', 650, 'ms')
    public static readonly ExpressiveFastEffects    = new Duration('--md-sys-motion-duration-expressive-fast-effects', 150, 'ms')
    public static readonly ExpressiveDefaultEffects = new Duration('--md-sys-motion-duration-expressive-default-effects', 200, 'ms')
    public static readonly ExpressiveSlowEffects    = new Duration('--md-sys-motion-duration-expressive-slow-effects', 300, 'ms')
    public static readonly StandardFastSpatial      = new Duration('--md-sys-motion-duration-standard-fast-spatial', 350, 'ms')
    public static readonly StandardDefaultSpatial   = new Duration('--md-sys-motion-duration-standard-default-spatial', 500, 'ms')
    public static readonly StandardSlowSpatial      = new Duration('--md-sys-motion-duration-standard-slow-spatial', 750, 'ms')
    public static readonly StandardFastEffects      = new Duration('--md-sys-motion-duration-standard-fast-effects', 150, 'ms')
    public static readonly StandardDefaultEffects   = new Duration('--md-sys-motion-duration-standard-default-effects', 200, 'ms')
    public static readonly StandardSlowEffects      = new Duration('--md-sys-motion-duration-standard-slow-effects', 300, 'ms')

    public static readonly AllEnums = {
        Short1               : this.Short1,                Short2                  : this.Short2,                   Short3               : this.Short3,                Short4    : this.Short4,
        Medium1              : this.Medium1,               Medium2                 : this.Medium2,                  Medium3              : this.Medium3,               Medium4   : this.Medium4,
        Long1                : this.Long1,                 Long2                   : this.Long2,                    Long3                : this.Long3,                 Long4     : this.Long4,
        ExtraLong1           : this.ExtraLong1,            ExtraLong2              : this.ExtraLong2,               ExtraLong3           : this.ExtraLong3,            ExtraLong4: this.ExtraLong4,
        ExpressiveFastSpatial: this.ExpressiveFastSpatial, ExpressiveDefaultSpatial: this.ExpressiveDefaultSpatial, ExpressiveSlowSpatial: this.ExpressiveSlowSpatial,
        ExpressiveFastEffects: this.ExpressiveFastEffects, ExpressiveDefaultEffects: this.ExpressiveDefaultEffects, ExpressiveSlowEffects: this.ExpressiveSlowEffects,
        StandardFastSpatial  : this.StandardFastSpatial,   StandardDefaultSpatial  : this.StandardDefaultSpatial,   StandardSlowSpatial  : this.StandardSlowSpatial,
        StandardFastEffects  : this.StandardFastEffects,   StandardDefaultEffects  : this.StandardDefaultEffects,   StandardSlowEffects  : this.StandardSlowEffects,
    } as const

}
