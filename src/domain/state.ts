import type { ICSSDeclaration } from '../interfaces/css-declaration.interface'

export class State<K extends string, V extends number, U extends string> implements ICSSDeclaration<K, V, `${K}: ${V}${U}${';' | ''}`, `var(${K}, ${V}${U})`> {
    public readonly Key  : K
    public readonly Value: V
    public readonly Unit : U

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
        this.Key   = Key
        this.Value = Value
        this.Unit  = Unit
    }

    public static readonly DraggedStateLayerOpacity  = new State('--md-sys-state-dragged-state-layer-opacity',  0.16, '')
    public static readonly PressedStateLayerOpacity  = new State('--md-sys-state-pressed-state-layer-opacity',  0.10, '')
    public static readonly FocusedStateLayerOpacity  = new State('--md-sys-state-focused-state-layer-opacity',  0.10, '')
    public static readonly HoveredStateLayerOpacity  = new State('--md-sys-state-hovered-state-layer-opacity',  0.08, '')
    public static readonly DisabledStateLayerOpacity = new State('--md-sys-state-disabled-state-layer-opacity', 0.38, '')
    public static readonly FocusIndicator            = {
        Thickness  : new State('--md-sys-state-focus-indicator-thickness',    3, 'px'),
        OuterOffset: new State('--md-sys-state-focus-indicator-outer-offset', 2, 'px'),
    }

    public static readonly AllEnums = {
        DraggedStateLayerOpacity : this.DraggedStateLayerOpacity,
        PressedStateLayerOpacity : this.PressedStateLayerOpacity,
        FocusedStateLayerOpacity : this.FocusedStateLayerOpacity,
        HoveredStateLayerOpacity : this.HoveredStateLayerOpacity,
        DisabledStateLayerOpacity: this.DisabledStateLayerOpacity,
        FocusIndicator           : {
            Thickness  : this.FocusIndicator.Thickness,
            OuterOffset: this.FocusIndicator.OuterOffset,
        }
    } as const

}
