import type { RequiredRenderProps } from './generic-types';

export abstract class BaseController<RenderProps> {
	public constructor(private readonly props: RequiredRenderProps<RenderProps>) {}

	protected setProp<K extends keyof RenderProps>(key: K, value: RequiredRenderProps<RenderProps>[K]): void {
		this.props[key] = value;
	}

	public getProps(): RequiredRenderProps<RenderProps> {
		return this.props;
	}
}
