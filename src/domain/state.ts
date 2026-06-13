import type { ICSSDeclaration } from '../types'

export class State<K extends string, V extends number, U extends string> implements ICSSDeclaration<K, V, `${K}: ${V}${U}${';' | ''}`> {
    public readonly key  : K
    public readonly value: V
    public readonly unit : U

    public toJSON() { return ({ key: this.key, value: this.value, unit: this.unit }) }
    public toCSSDeclaration({ semicolon = false, wrapVariable = false }: { semicolon?: boolean, wrapVariable?: boolean } = {}): string {
        return wrapVariable
            ? `var(${this.key}, ${this.value}${this.unit})`
            : `${this.key}: ${this.value}${this.unit}${semicolon ? ';' : ''}`
    }
    public toString() { return this.toCSSDeclaration() }

    private constructor(key: K, value: V, unit: U) {
        this.key   = key
        this.value = value
        this.unit  = unit
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
