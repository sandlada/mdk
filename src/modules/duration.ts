export abstract class Duration {
    public static readonly Short1     = '50ms'
    public static readonly Short2     = '100ms'
    public static readonly Short3     = '150ms'
    public static readonly Short4     = '200ms'
    public static readonly Medium1    = '250ms'
    public static readonly Medium2    = '300ms'
    public static readonly Medium3    = '350ms'
    public static readonly Medium4    = '400ms'
    public static readonly Long1      = '450ms'
    public static readonly Long2      = '500ms'
    public static readonly Long3      = '550ms'
    public static readonly Long4      = '600ms'
    public static readonly ExtraLong1 = '700ms'
    public static readonly ExtraLong2 = '800ms'
    public static readonly ExtraLong3 = '900ms'
    public static readonly ExtraLong4 = '1000ms'

    public static readonly ExpressiveFastSpatial    = `350ms`
    public static readonly ExpressiveDefaultSpatial = `500ms`
    public static readonly ExpressiveSlowSpatial    = `650ms`
    public static readonly ExpressiveFastEffects    = `150ms`
    public static readonly ExpressiveDefaultEffects = `200ms`
    public static readonly ExpressiveSlowEffects    = `300ms`
    public static readonly StandardFastSpatial      = `350ms`
    public static readonly StandardDefaultSpatial   = `500ms`
    public static readonly StandardSlowSpatial      = `750ms`
    public static readonly StandardFastEffects      = `150ms`
    public static readonly StandardDefaultEffects   = `200ms`
    public static readonly StandardSlowEffects      = `300ms`

    public static readonly Number = class {
        public static readonly Short1     = 50
        public static readonly Short2     = 100
        public static readonly Short3     = 150
        public static readonly Short4     = 200
        public static readonly Medium1    = 250
        public static readonly Medium2    = 300
        public static readonly Medium3    = 350
        public static readonly Medium4    = 400
        public static readonly Long1      = 450
        public static readonly Long2      = 500
        public static readonly Long3      = 550
        public static readonly Long4      = 600
        public static readonly ExtraLong1 = 700
        public static readonly ExtraLong2 = 800
        public static readonly ExtraLong3 = 900
        public static readonly ExtraLong4 = 1000

        public static readonly ExpressiveFastSpatial    = 350
        public static readonly ExpressiveDefaultSpatial = 500
        public static readonly ExpressiveSlowSpatial    = 650
        public static readonly ExpressiveFastEffects    = 150
        public static readonly ExpressiveDefaultEffects = 200
        public static readonly ExpressiveSlowEffects    = 300
        public static readonly StandardFastSpatial      = 350
        public static readonly StandardDefaultSpatial   = 500
        public static readonly StandardSlowSpatial      = 750
        public static readonly StandardFastEffects      = 150
        public static readonly StandardDefaultEffects   = 200
        public static readonly StandardSlowEffects      = 300
    }
}