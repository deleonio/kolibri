import type { RequiredRenderProps } from './generic-types';

export abstract class BaseController<Host, RenderProps> {
	private renderProps: RequiredRenderProps<RenderProps>;

	public constructor(
		protected readonly component: Host,
		renderProps: RequiredRenderProps<RenderProps>,
	) {
		this.renderProps = renderProps;
	}

	protected setState<K extends keyof Host>(prop: K, value: Host[K]): void {
		this.component[prop] = value;
	}

	protected setRenderProp<K extends keyof RenderProps>(prop: K, value: RequiredRenderProps<RenderProps>[K]): void {
		this.renderProps[prop] = value;
	}

	public getRenderProps(): RequiredRenderProps<RenderProps> {
		return this.renderProps;
	}
}
