# Overview

This folder contains the `_skeleton` showcase component. It demonstrates the recommended interaction between a Stencil web component, a stateless functional component and a controller. Use it as a blueprint when starting new components.

## Architecture summary

- **Web component** – `web-components/skeleton/component.tsx`
  - Public props are prefixed with `_` and mirrored to `@State` variables.
  - Each prop has a `@Watch` method which normalizes and validates the value using helpers from `internal/schema/props`. Valid values update the state via `SkeletonController.setState`.
  - `componentWillLoad` calls all watchers once to initialise state before the first render.
  - Rendering is delegated to `SkeletonFC`. Events (`loaded`) and ref callbacks from the controller are forwarded as props.
- **Functional component** – `internal/functional-components/skeleton/component.tsx`
  - Receives state, callback handlers and ref setters through its props.
  - Contains all DOM markup and composes the `ClickButtonFC` sub component.
- **Controller** – `internal/functional-components/skeleton/controller.ts`
  - Extends `BaseController` and contains the component logic.
  - Exposes callback handlers (`handleClick`) and ref setters (`setButtonRef`).
  - Only updates state via `setState` and does not manipulate DOM directly.
- **Sub component** – `internal/functional-components/click-button` and `web-components/click-button`
  - Shows how to build a small component with its own controller and functional component.
- **Utility files**
  - `base-controller.ts` – minimal controller base class providing `setState`.
  - `generic-types.ts` – generic TypeScript helpers for props, callbacks, emitters and refs.

## File layout

- `web-components/skeleton/component.tsx` – Stencil component
- `web-components/click-button/component.tsx` – example button component
- `internal/functional-components/skeleton/component.tsx` – functional component
- `internal/functional-components/skeleton/controller.ts` – controller logic
- `internal/functional-components/click-button/component.tsx` – functional button
- `internal/functional-components/click-button/controller.ts` – button controller
- `internal/functional-components/base-controller.ts` – helper base class
- `internal/functional-components/generic-types.ts` – shared type helpers
- `internal/schema/props/*.ts` – property types with `normalize*` and `validate*`

## Implementation pattern

1. Declare public properties with `@Prop({ reflect: true })` and mirror them to `@State` variables.
2. Normalize and validate values in a `@Watch` method and update state via `controller.setState()`.
3. Call each watcher from `componentWillLoad` to set the initial state.
4. Keep all logic inside the controller; the functional component stays stateless.
5. Pass events and ref callbacks from the controller to the functional component.

### Example usage

```html
<kol-skeleton _label="Foo" _name="Bar" _show></kol-skeleton>
```
