export abstract class State {
    public static readonly DraggedStateLayerOpacity = `0.16`
    public static readonly FocusedStateLayerOpacity = `0.12`
    public static readonly HoveredStateLayerOpacity = `0.08`
    public static readonly PressedStateLayerOpacity = `0.12`
    
    public static readonly FocusIndicator           = class {
        public static readonly Thickness   = `3px`
        public static readonly OuterOffset = `2px`
    }
}
