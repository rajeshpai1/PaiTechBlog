// kea.d.ts

interface IActions {
	actions: {
		[key: string]: any;
	};
}

interface IHooks {
	beforeMount?: () => void;
	afterMount?: () => void;
	beforeUnmount?: () => void;
	afterUnmount?: () => void;
}

type breakpoint = (delay?: number) => Promise<void>;

interface IActions {
	[key: string]: (...rest: any) => rest | true;
}

type logic = any;

interface Input {
	values?: (logic | string[])[];
	actions?: (logic | string[])[];
}

type PrimitiveTypes = boolean | number | string;
type BasicTypes = {} | PrimitiveTypes | PrimitiveTypes[] | never[] | null;

type NonUndefinedValueObject<T> = {
	[K in keyof T]: T[K] extends undefined ? never : T[K];
};

// TODO - Should we remove - no idea yet???
type IPrimitives = string | number | object | boolean | null;
type ITruthy = IPrimitives | IPrimitives[] | IPrimitives[][];

type ReturnFunc = ((args: any) => any) & IActionParams;

type IDispatch = {
	[k: string]: (state: any, newState: any) => ITruthy;
};

interface IActionReturn {
	[k: string]: (...rest: any) => object;
}

interface IIndexSignature {
	[key: string]: ITruthy;
}

interface IActionParams {
	actionCreators: IIndexSignature;
	actionKeys: IIndexSignature;
	actions: { [k: string]: (...rest: any) => object };
	constants: Record<string, ITruthy>;
	defaults: Record<string, ITruthy>;
	events: IHooks;
	key?: string;
	listeners: {
		[key: string]: (payload: Record<string, any>, breakpoint: breakpoint) => void;
	};
	path: string[];
	pathString: string;
	props: Record<string, any>;
	reducers: { [key: string]: IDispatch | [ITruthy, IDispatch] };
	selectors: Record<string, ITruthy>;
	sharedListeners: { [key: string]: (payload: Record<string, any>, breakpoint: breakpoint) => void };
	values: Record<string, any>;
}

type IAnAction = (param1: IActionParams) => { [k: string]: ((...rest: any) => object) | true };
type IAnReducerAction = (
	param1: IActionParams,
) => {
	[key: string]: IDispatch | [ITruthy, IDispatch];
};

declare module 'kea' {
	export function kea<State = {}, Actions = {}>(input: {
		connect?: Input;

		key?: (props: any) => any;

		path?: (key?: string) => string[];

		defaults?: NonUndefinedValueObject<State> & Record<string, BasicTypes>;

		events?: (params: IActionParams) => IHooks;

		actions?: IAnAction | { [k: string]: ((...rest: any) => object) | true };

		listeners?: (
			param1: IActionParams,
		) => {
			[key: string]:
				| ((payload: Record<string, any>, breakpoint: breakpoint) => Promise<void> | void)
				| ((payload: Record<string, any>, breakpoint: breakpoint) => Promise<void> | void)[];
		};

		sharedListeners?: (
			param1: IActionParams,
		) => {
			[key: string]: (payload: Record<string, any>, breakpoint: breakpoint, action: string) => void;
		};

		reducers?: IAnReducerAction | object;

		selectors?: {
			[key: string]: [(selectors) => any[], (...rest: any) => any];
		};
	}): ReturnFunc {}

	export function connect(input: Input): ReturnFunc {
		return kea({ connect: input });
	}

	/**
	 * useValue React js hook retuns states present in logic
	 * @param {logic} logic
	 * T is an object
	 * @returns T
	 */
	export function useValues<T extends object>(logic: logic): T {}

	/**
	 * useActions React js hooks returns all avilable actions in the logic
	 * @param logic
	 * T is an object
	 * @returns T
	 */
	export function useActions<T extends object>(
		logic: logic,
	): {
		[K in keyof T]: T[K];
	} {}
	export function isBreakpoint(error: any): boolean {}
	export function resetContext(options: object): object {}
	export function getContext(): { store: import('redux').Store<any, import('redux').AnyAction> };
}