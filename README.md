# @sandlada/mdk

`@sandlada/mdk`, Material Design Kit, a JavaScript library based on Material Design 3, providing data such as color, shape, shadow level, etc:

+ Palette
+ Color
+ Variant
+ ElevationLevel
+ ContrastLevel
+ Duration
+ Easing
+ Shape

## Installation

```shell
npm i @sandlada/mdk
```

## Usage

### Use Color

```typescript
import { Color } from '@sandlada/mdk'

const surface = Color.Surface

/**
 * @output
 * ```
 * --md-sys-color-surface
 * ```
 */
console.log(surface.key)

/**
 * @output
 * ```
 * ["var(--md-sys-palette-neutral-98, #fef7ff)", "var(--md-sys-palette-neutral-6, #141218)"]
 * ```
 */
console.log(surface.value)

/**
 * @output
 * ```
 * var(--md-sys-color-surface, light-dark(var(--md-sys-palette-neutral-98, #fef7ff), var(--md-sys-palette-neutral-6, #141218)))
 * ```
 */
console.log(surface.toCSSValue())

const yourDiv = document.querySelector('body')
yourDiv.style.setProperty('background-color', surface.toCSSValue())
```

### Use Shape

```typescript
import { Shape } from '@sandlada/mdk'

const shapeLarge = Shape.Large

/**
 * @output
 * ```
 * large
 * ```
 */
console.log(shapeLarge.key)

/**
 * @output
 * ```
 * 16
 * ```
 */
console.log(shapeLarge.value)

/**
 * @output
 * ```
 * px
 * ```
 */
console.log(shapeLarge.unit)

/**
 * @output
 * ```
 * var(--md-sys-shape-corner-large, 16px)
 * ```
 */
console.log(shapeLarge.toCSSValue())

const myBox = document.querySelector('#my-box')
myBox.style.setProperty('border-radius', shapeLarge.toCSSValue())
```

### Use Typescale

```typescript
import { Typescale } from '@sandlada/mdk'

const displayLarge = Typescale.DisplayLarge

const fontSize = displayLarge.fontSize

/**
 * @output
 * ```
 * display-large-font-size
 * ```
 */
console.log(fontSize.key)

/**
 * @output
 * ```
 * 57
 * ```
 */
console.log(fontSize.value)

/**
 * @output
 * ```
 * px
 * ```
 */
console.log(fontSize.unit)

/**
 * @output
 * ```
 * var(--md-sys-typescale-display-large-font-size, 57px)
 * ```
 */
console.log(fontSize.toCSSValue())
```