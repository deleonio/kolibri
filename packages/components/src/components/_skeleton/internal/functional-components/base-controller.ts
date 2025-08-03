import type { RequiredRenderProps } from './generic-types';

export abstract class BaseController<Host, RenderProps> {
	public constructor(
		protected readonly component: Host,
		protected renderProps: RequiredRenderProps<RenderProps>,
	) {}

	protected setState<K extends keyof Host>(prop: K, value: Host[K]): void {
		this.component[prop] = value;
	}

	public getRenderProps(): RequiredRenderProps<RenderProps> {
		return this.renderProps;
	}
}
