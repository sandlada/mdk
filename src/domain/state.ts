import { CSSToken } from './css-token.js'

export class State<K extends string, V extends number, U extends string> extends CSSToken<K, V, U> {
    public static readonly DraggedStateLayerOpacity = new State('--md-sys-state-dragged-state-layer-opacity', 0.16, '')
    public static readonly PressedStateLayerOpacity = new State('--md-sys-state-pressed-state-layer-opacity', 0.1, '')
    public static readonly FocusedStateLayerOpacity = new State('--md-sys-state-focused-state-layer-opacity', 0.1, '')
    public static readonly HoveredStateLayerOpacity = new State('--md-sys-state-hovered-state-layer-opacity', 0.08, '')
    public static readonly DisabledStateLayerOpacity = new State('--md-sys-state-disabled-state-layer-opacity', 0.38, '')
    public static readonly FocusIndicator = {
        Thickness: new State('--md-sys-state-focus-indicator-thickness', 3, 'px'),
        OuterOffset: new State('--md-sys-state-focus-indicator-outer-offset', 2, 'px')
    }

    public static readonly AllEnums = {
        DraggedStateLayerOpacity: this.DraggedStateLayerOpacity,
        PressedStateLayerOpacity: this.PressedStateLayerOpacity,
        FocusedStateLayerOpacity: this.FocusedStateLayerOpacity,
        HoveredStateLayerOpacity: this.HoveredStateLayerOpacity,
        DisabledStateLayerOpacity: this.DisabledStateLayerOpacity,
        FocusIndicator: {
            Thickness: this.FocusIndicator.Thickness,
            OuterOffset: this.FocusIndicator.OuterOffset
        }
    } as const
}
