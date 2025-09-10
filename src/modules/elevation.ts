
export abstract class ElevationLevel {
    public static readonly Level0 = `var(--md-sys-elevation-level-0, 0)`
    public static readonly Level1 = `var(--md-sys-elevation-level-1, 1)`
    public static readonly Level2 = `var(--md-sys-elevation-level-2, 3)`
    public static readonly Level3 = `var(--md-sys-elevation-level-3, 6)`
    public static readonly Level4 = `var(--md-sys-elevation-level-4, 8)`
    public static readonly Level5 = `var(--md-sys-elevation-level-5, 12)`

    public static readonly Number = class {
        public static readonly Level0 = 0
        public static readonly Level1 = 1
        public static readonly Level2 = 2
        public static readonly Level3 = 3
        public static readonly Level4 = 4
        public static readonly Level5 = 5
    }
}

export abstract class ElevationBoxShaodw {
    public static readonly Level0 = `box-shadow: none`
    public static readonly Level1 = `box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px`
    public static readonly Level2 = `box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px`
    public static readonly Level3 = `box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px`
    public static readonly Level4 = `box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px`
    public static readonly Level5 = `box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px`
}