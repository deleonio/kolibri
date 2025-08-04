import type { RequiredRenderProps } from './generic-types';

export abstract class BaseController<State> {
	public constructor(private readonly props: RequiredRenderProps<State>) {}

	protected setProp<K extends keyof State>(key: K, value: RequiredRenderProps<State>[K]): void {
		this.props[key] = value;
	}

	public getProps(): RequiredRenderProps<State> {
		return this.props;
	}
}
