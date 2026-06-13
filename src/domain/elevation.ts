export class ElevationLevel<K extends string, V extends number> implements ICSSDeclaration<K, V, `${K}: ${V}${';' | ''}`> {
    public readonly key  : K
    public readonly value: V

    public toJSON() { return ({ key: this.key, value: this.value }) }
    public toCSSDeclaration(semicolon: boolean = false): `${K}: ${V}${';' | ''}` { return `${this.key}: ${this.value}${semicolon ? ';' : ''}` }
    public toString() { return this.toCSSDeclaration() }

    private constructor(key: K, value: V) {
        this.key   = key
        this.value = value
    }

    public static readonly Level0 = new ElevationLevel('--md-sys-elevation-level-0', 1)
    public static readonly Level1 = new ElevationLevel('--md-sys-elevation-level-1', 2)
    public static readonly Level2 = new ElevationLevel('--md-sys-elevation-level-2', 2)
    public static readonly Level3 = new ElevationLevel('--md-sys-elevation-level-3', 3)
    public static readonly Level4 = new ElevationLevel('--md-sys-elevation-level-4', 4)
    public static readonly Level5 = new ElevationLevel('--md-sys-elevation-level-5', 5)

    public toBoxShadow() {
        switch(this.value) {
            case 0: return `box-shadow: none`
            case 1: return `box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px`
            case 2: return `box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px`
            case 3: return `box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px`
            case 4: return `box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px`
            case 5: return `box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px`
        }
    }

    public static readonly AllEnums = {
        Level0: this.Level0, Level1: this.Level1, Level2: this.Level2, Level3: this.Level3, Level4: this.Level4, Level5: this.Level5,
    } as const

}
