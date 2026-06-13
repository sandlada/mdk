export class Color<K extends string, V extends string> implements ICSSDeclaration<K, V, `${K}: ${V}${';' | ''}`> {

    public readonly key  : K
    public readonly value: V

    public toJSON() { return { key: this.key, value: this.value } }
    public toString() { return this.value }
    public toCSSDeclaration({ semicolon = false, wrapVariable = false }: { semicolon?: boolean, wrapVariable?: boolean } = {}): string {
        return wrapVariable
            ? `var(${this.key}, ${this.value})`
            : `${this.key}: ${this.value}${semicolon ? ';' : ''}`
    }

    private constructor(key: K, value: V) {
        this.key = key
        this.value = value
    }

    public static readonly PrimaryKeyColor         = new Color(`--md-sys-color-primary-key-color`, `#039d54`)
    public static readonly SecondaryKeyColor       = new Color(`--md-sys-color-secondary-key-color`, `#54815f`)
    public static readonly TertiaryKeyColor        = new Color(`--md-sys-color-tertiary-key-color`, `#ffa97f`)
    public static readonly ErrorKeyColor           = new Color(`--md-sys-color-error-key-color`, `#de3730`)
    public static readonly NeutralKeyColor         = new Color(`--md-sys-color-neutral-key-color`, `#727971`)
    public static readonly NeutralVariantKeyColor  = new Color(`--md-sys-color-neutral-variant-key-color`, `#6d7a6e`)
    public static readonly Background              = new Color(`--md-sys-color-background`, `light-dark(#f4fbf1, #0e150f)`)
    public static readonly Error                   = new Color(`--md-sys-color-error`, `light-dark(#ba1a1a, #ffb4ab)`)
    public static readonly ErrorContainer          = new Color(`--md-sys-color-error-container`, `light-dark(#ffdad6, #93000a)`)
    public static readonly ErrorDim                = new Color(`--md-sys-color-error-dim`, `light-dark(#a80710, #ff554a)`)
    public static readonly InverseOnSurface        = new Color(`--md-sys-color-inverse-on-surface`, `light-dark(#ecf3e9, #2b322c)`)
    public static readonly InversePrimary          = new Color(`--md-sys-color-inverse-primary`, `light-dark(#61de8c, #006d38)`)
    public static readonly InverseSurface          = new Color(`--md-sys-color-inverse-surface`, `light-dark(#2b322c, #dde4db)`)
    public static readonly OnBackground            = new Color(`--md-sys-color-on-background`, `light-dark(#171d17, #dde4db)`)
    public static readonly OnError                 = new Color(`--md-sys-color-on-error`, `light-dark(#ffffff, #690005)`)
    public static readonly OnErrorContainer        = new Color(`--md-sys-color-on-error-container`, `light-dark(#93000a, #ffdad6)`)
    public static readonly OnPrimary               = new Color(`--md-sys-color-on-primary`, `light-dark(#ffffff, #00391a)`)
    public static readonly OnPrimaryContainer      = new Color(`--md-sys-color-on-primary-container`, `light-dark(#00592c, #00592c)`)
    public static readonly OnPrimaryFixed          = new Color(`--md-sys-color-on-primary-fixed`, `light-dark(#00210d, #00210d)`)
    public static readonly OnPrimaryFixedVariant   = new Color(`--md-sys-color-on-primary-fixed-variant`, `light-dark(#005229, #005229)`)
    public static readonly OnSecondary             = new Color(`--md-sys-color-on-secondary`, `light-dark(#ffffff, #0a381c)`)
    public static readonly OnSecondaryContainer    = new Color(`--md-sys-color-on-secondary-container`, `light-dark(#406c4b, #97c7a0)`)
    public static readonly OnSecondaryFixed        = new Color(`--md-sys-color-on-secondary-fixed`, `light-dark(#00210d, #00210d)`)
    public static readonly OnSecondaryFixedVariant = new Color(`--md-sys-color-on-secondary-fixed-variant`, `light-dark(#244f31, #244f31)`)
    public static readonly OnSurface               = new Color(`--md-sys-color-on-surface`, `light-dark(#171d17, #dde4db)`)
    public static readonly OnSurfaceVariant        = new Color(`--md-sys-color-on-surface-variant`, `light-dark(#3d4a3f, #bccabc)`)
    public static readonly OnTertiary              = new Color(`--md-sys-color-on-tertiary`, `light-dark(#ffffff, #552002)`)
    public static readonly OnTertiaryContainer     = new Color(`--md-sys-color-on-tertiary-container`, `light-dark(#793c1a, #793c1a)`)
    public static readonly OnTertiaryFixed         = new Color(`--md-sys-color-on-tertiary-fixed`, `light-dark(#351000, #351000)`)
    public static readonly OnTertiaryFixedVariant  = new Color(`--md-sys-color-on-tertiary-fixed-variant`, `light-dark(#723615, #723615)`)
    public static readonly Outline                 = new Color(`--md-sys-color-outline`, `light-dark(#6d7a6e, #879487)`)
    public static readonly OutlineVariant          = new Color(`--md-sys-color-outline-variant`, `light-dark(#bccabc, #3d4a3f)`)
    public static readonly Primary                 = new Color(`--md-sys-color-primary`, `light-dark(#006d38, #76f29e)`)
    public static readonly PrimaryContainer        = new Color(`--md-sys-color-primary-container`, `light-dark(#58d584, #58d584)`)
    public static readonly PrimaryDim              = new Color(`--md-sys-color-primary-dim`, `light-dark(#006030, #82fea8)`)
    public static readonly PrimaryFixed            = new Color(`--md-sys-color-primary-fixed`, `light-dark(#7ffba6, #7ffba6)`)
    public static readonly PrimaryFixedDim         = new Color(`--md-sys-color-primary-fixed-dim`, `light-dark(#61de8c, #61de8c)`)
    public static readonly Scrim                   = new Color(`--md-sys-color-scrim`, `light-dark(#000000, #000000)`)
    public static readonly Secondary               = new Color(`--md-sys-color-secondary`, `light-dark(#3c6847, #a2d2ab)`)
    public static readonly SecondaryContainer      = new Color(`--md-sys-color-secondary-container`, `light-dark(#bbecc3, #295436)`)
    public static readonly SecondaryDim            = new Color(`--md-sys-color-secondary-dim`, `light-dark(#305b3c, #bdeec5)`)
    public static readonly SecondaryFixed          = new Color(`--md-sys-color-secondary-fixed`, `light-dark(#bdeec5, #bdeec5)`)
    public static readonly SecondaryFixedDim       = new Color(`--md-sys-color-secondary-fixed-dim`, `light-dark(#a2d2ab, #a2d2ab)`)
    public static readonly Shadow                  = new Color(`--md-sys-color-shadow`, `light-dark(#000000, #000000)`)
    public static readonly Surface                 = new Color(`--md-sys-color-surface`, `light-dark(#f4fbf1, #0e150f)`)
    public static readonly SurfaceBright           = new Color(`--md-sys-color-surface-bright`, `light-dark(#f4fbf1, #343b34)`)
    public static readonly SurfaceContainer        = new Color(`--md-sys-color-surface-container`, `light-dark(#e9f0e6, #1b211b)`)
    public static readonly SurfaceContainerHigh    = new Color(`--md-sys-color-surface-container-high`, `light-dark(#e3eae1, #252c25)`)
    public static readonly SurfaceContainerHighest = new Color(`--md-sys-color-surface-container-highest`, `light-dark(#dde4db, #303630)`)
    public static readonly SurfaceContainerLow     = new Color(`--md-sys-color-surface-container-low`, `light-dark(#eff6ec, #171d17)`)
    public static readonly SurfaceContainerLowest  = new Color(`--md-sys-color-surface-container-lowest`, `light-dark(#ffffff, #09100a)`)
    public static readonly SurfaceDim              = new Color(`--md-sys-color-surface-dim`, `light-dark(#d5dcd3, #0e150f)`)
    public static readonly SurfaceTint             = new Color(`--md-sys-color-surface-tint`, `light-dark(#006d38, #61de8c)`)
    public static readonly SurfaceVariant          = new Color(`--md-sys-color-surface-variant`, `light-dark(#d8e6d7, #3d4a3f)`)
    public static readonly Tertiary                = new Color(`--md-sys-color-tertiary`, `light-dark(#8f4d2a, #ffcfba)`)
    public static readonly TertiaryContainer       = new Color(`--md-sys-color-tertiary-container`, `light-dark(#ffa97f, #ffa97f)`)
    public static readonly TertiaryDim             = new Color(`--md-sys-color-tertiary-dim`, `light-dark(#804120, #fda77d)`)
    public static readonly TertiaryFixed           = new Color(`--md-sys-color-tertiary-fixed`, `light-dark(#ffdbcc, #ffdbcc)`)
    public static readonly TertiaryFixedDim        = new Color(`--md-sys-color-tertiary-fixed-dim`, `light-dark(#ffb693, #ffb693)`)

    public static readonly AllEnums = {
        PrimaryKeyColor        : this.PrimaryKeyColor,         SecondaryKeyColor      : this.SecondaryKeyColor,
        TertiaryKeyColor       : this.TertiaryKeyColor,        ErrorKeyColor          : this.ErrorKeyColor,
        NeutralKeyColor        : this.NeutralKeyColor,         NeutralVariantKeyColor : this.NeutralVariantKeyColor,
        Background             : this.Background,              Error                  : this.Error,
        ErrorContainer         : this.ErrorContainer,          ErrorDim               : this.ErrorDim,
        InverseOnSurface       : this.InverseOnSurface,        InversePrimary         : this.InversePrimary,
        InverseSurface         : this.InverseSurface,          OnBackground           : this.OnBackground,
        OnError                : this.OnError,                 OnErrorContainer       : this.OnErrorContainer,
        OnPrimary              : this.OnPrimary,               OnPrimaryContainer     : this.OnPrimaryContainer,
        OnPrimaryFixed         : this.OnPrimaryFixed,          OnPrimaryFixedVariant  : this.OnPrimaryFixedVariant,
        OnSecondary            : this.OnSecondary,             OnSecondaryContainer   : this.OnSecondaryContainer,
        OnSecondaryFixed       : this.OnSecondaryFixed,        OnSecondaryFixedVariant: this.OnSecondaryFixedVariant,
        OnSurface              : this.OnSurface,               OnSurfaceVariant       : this.OnSurfaceVariant,
        OnTertiary             : this.OnTertiary,              OnTertiaryContainer    : this.OnTertiaryContainer,
        OnTertiaryFixed        : this.OnTertiaryFixed,         OnTertiaryFixedVariant : this.OnTertiaryFixedVariant,
        Outline                : this.Outline,                 OutlineVariant         : this.OutlineVariant,
        Primary                : this.Primary,                 PrimaryContainer       : this.PrimaryContainer,
        PrimaryDim             : this.PrimaryDim,              PrimaryFixed           : this.PrimaryFixed,
        PrimaryFixedDim        : this.PrimaryFixedDim,         Scrim                  : this.Scrim,
        Secondary              : this.Secondary,               SecondaryContainer     : this.SecondaryContainer,
        SecondaryDim           : this.SecondaryDim,            SecondaryFixed         : this.SecondaryFixed,
        SecondaryFixedDim      : this.SecondaryFixedDim,       Shadow                 : this.Shadow,
        Surface                : this.Surface,                 SurfaceBright          : this.SurfaceBright,
        SurfaceContainer       : this.SurfaceContainer,        SurfaceContainerHigh   : this.SurfaceContainerHigh,
        SurfaceContainerHighest: this.SurfaceContainerHighest, SurfaceContainerLow    : this.SurfaceContainerLow,
        SurfaceContainerLowest : this.SurfaceContainerLowest,  SurfaceDim             : this.SurfaceDim,
        SurfaceTint            : this.SurfaceTint,             SurfaceVariant         : this.SurfaceVariant,
        Tertiary               : this.Tertiary,                TertiaryContainer      : this.TertiaryContainer,
        TertiaryDim            : this.TertiaryDim,             TertiaryFixed          : this.TertiaryFixed,
        TertiaryFixedDim       : this.TertiaryFixedDim,
    }

}
