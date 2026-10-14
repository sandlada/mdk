import { CSSToken } from './css-token.js'

export class ElevationLevel<K extends string, V extends number, U extends string> extends CSSToken<K, V, U> {
    public static readonly Level0 = new ElevationLevel('--md-sys-elevation-level-0', 0, 'px')
    public static readonly Level1 = new ElevationLevel('--md-sys-elevation-level-1', 1, 'px')
    public static readonly Level2 = new ElevationLevel('--md-sys-elevation-level-2', 3, 'px')
    public static readonly Level3 = new ElevationLevel('--md-sys-elevation-level-3', 6, 'px')
    public static readonly Level4 = new ElevationLevel('--md-sys-elevation-level-4', 8, 'px')
    public static readonly Level5 = new ElevationLevel('--md-sys-elevation-level-5', 12, 'px')

    public static readonly AllEnums = {
        Level0: this.Level0,
        Level1: this.Level1,
        Level2: this.Level2,
        Level3: this.Level3,
        Level4: this.Level4,
        Level5: this.Level5
    } as const
}
