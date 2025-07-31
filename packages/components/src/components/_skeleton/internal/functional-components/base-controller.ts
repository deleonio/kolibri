export abstract class BaseController<Component> {
	public constructor(protected readonly component: Component) {}

	protected setState(prop: string, value: unknown): void {
		(this.component as Record<string, unknown>)[prop] = value;
	}
}
