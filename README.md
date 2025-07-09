# @sandlada/mdk

`@sandlada/mdk`, Material Design Kit, a JavaScript library based on Material Design 3, providing data such as color, shape, shadow level, etc:

+ Palette
+ DefaultDarkColor
+ DefaultLightColor
+ Variants
+ ElevationBoxShaodw
+ ElevationLevel
+ ContrastLevel
+ Durations
+ Easings
+ Shapes

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
 * var(--md-sys-palette-neutral-6, #141218)
 * ```
 */
console.log(surface)

const yourDiv = document.querySelector('body')
yourDiv.style.setProperty('background-color', surface)
```

### Use Shape

```typescript
import { Shape } from '@sandlada/mdk'

const shapeLarge = Shape.Large

/**
 * @output
 * ```
 * var(--md-sys-shape-corner-large, 16px)
 * ```
 */
console.log(shapeLarge)

const myBox = document.querySelector('#my-box')
myBox.style.setProperty('border-radius', shapeLarge)
```
