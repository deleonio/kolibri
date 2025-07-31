# Overview

This folder contains the `_skeleton` showcase component. It demonstrates the recommended interaction between a Stencil web component, a stateless functional component and a controller. Use it as a blueprint when starting new components.

## Architecture summary

- **Web component** – `web-components/skeleton/component.tsx`
  - Public props are prefixed with `_` and mirrored to `@State` variables.
  - Each prop has a `@Watch` method that delegates to `SkeletonController`'s watcher functions for normalization and validation. Valid values update the state via `setState`.
  - The controller implements `componentWillLoad` where it calls these watchers to initialise state. The web component's lifecycle simply delegates to the controller.
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
  - `base-controller.ts` – minimal controller base class with a protected `setState` method.

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

1. Declare public properties with `@Prop()` and mirror them to `@State` variables.
2. Implement watcher logic in the controller and delegate from the web component's `@Watch` methods.
3. The controller's `componentWillLoad()` calls the watchers once for initial state. The web component's lifecycle delegates to this method.
4. Keep all logic inside the controller; the functional component stays stateless.
5. Pass events and ref callbacks from the controller to the functional component.

### Example usage

```html
<kol-skeleton _label="Foo" _name="Bar" _show></kol-skeleton>
```
