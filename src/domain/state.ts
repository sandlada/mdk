import type { ICSSValue } from "../primitives/ICSSValue"
import type { IValueObject } from "../primitives/IValueObject"

export class State<K extends string, V extends number, U extends string> implements ICSSValue, IValueObject<V> {
    private constructor(
        public readonly key: K,
        public readonly value: V,
        public readonly unit: U
    ) {}

    private static of<K extends string, V extends number, U extends string>(key: K, value: V, unit: U): State<K, V, U> {
        return new State<K, V, U>(key, value, unit)
    }
    
    public static readonly DraggedStateLayerOpacity = State.of('dragged-state-layer-opacity', 0.16, '')
    public static readonly FocusedStateLayerOpacity = State.of('focused-state-layer-opacity', 0.12, '')
    public static readonly HoveredStateLayerOpacity = State.of('hovered-state-layer-opacity', 0.08, '')
    public static readonly PressedStateLayerOpacity = State.of('pressed-state-layer-opacity', 0.12, '')
    public static readonly FocusIndicator           = {
        Thickness   : State.of('thickness', 3, 'px'),
        OuterOffset : State.of('outer-offset', 2, 'px'),
    }

    public toCSSValue(): `var(--md-sys-state-${K}, ${V}${U})` {
        return `var(--md-sys-state-${this.key}, ${this.value}${this.unit})`
    }

    public toString() {
        return this.toCSSValue()
    }

}
