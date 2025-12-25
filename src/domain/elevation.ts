import type { IValueObject } from "../primitives/IValueObject"
import type { ICSSValue } from "../primitives/ICSSValue"

export class ElevationLevel<K extends number, V extends number> implements IValueObject<V>, ICSSValue {
    public readonly key  : K
    public readonly value: V

    private constructor(key: K, value: V) {
        this.key   = key
        this.value = value
    }
    
    private static of<K extends number, V extends number>(key: K, value: V): ElevationLevel<K, V> {
        return new ElevationLevel<K, V>(key, value)
    }

    public static readonly Level0 = ElevationLevel.of(0, 0)
    public static readonly Level1 = ElevationLevel.of(1, 1)
    public static readonly Level2 = ElevationLevel.of(2, 3)
    public static readonly Level3 = ElevationLevel.of(3, 6)
    public static readonly Level4 = ElevationLevel.of(4, 8)
    public static readonly Level5 = ElevationLevel.of(5, 12)

    public toCSSValue(): `var(--md-sys-elevation-level-${K}, ${V})` {
        return `var(--md-sys-elevation-level-${this.key}, ${this.value})`
    }

    public toString() {
        return this.toCSSValue()
    }

    public toBoxShadow() {
        switch(this.key) {
            case 0: return `box-shadow: none`
            case 1: return `box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px`
            case 2: return `box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px`
            case 3: return `box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px`
            case 4: return `box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px`
            case 5: return `box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px`
        }
    }

}
