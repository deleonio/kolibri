import type { RequiredRenderProps } from './generic-types';

export abstract class BaseController<Host, RenderProps> {
	protected renderProps = {} as RequiredRenderProps<RenderProps>;

	public constructor(protected readonly component: Host) {}

	protected setRenderProps<K extends keyof RenderProps>(prop: K, value: NonNullable<RenderProps[K]>): void {
		this.renderProps[prop] = value;
	}

	protected setStates<K extends keyof Host>(prop: K, value: Host[K]): void {
		this.component[prop] = value;
	}

	public getRenderProps(): RequiredRenderProps<RenderProps> {
		return this.renderProps;
	}
}
