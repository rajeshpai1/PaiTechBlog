declare interface ICompetitor {
	sort_index: number;
	eanhotelid: string;
	name: string;
	city: string;
	latitude: number;
	longitude: number;
	star_rating: number;
	checked?: boolean;
	weightage?: number;
}

declare interface ISubscriber {
	eanhotelid: string;
	name: string;
	city: string;
	longitude: number;
	latitude: number;
	star_rating: number;
}

declare interface IChipProps {
	className?: string;
	title?: any;
	prefix?: any;
	checked?: boolean;
	checkable?: boolean;
	closable?: boolean;
	width?: number | string;
	children: React.ReactChild;
	onChange?: (checked: boolean) => void;
	onClose?: () => void;
}

declare interface IChipStates {
	checked: boolean;
	closed: boolean;
}

declare interface IUserInfo {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	title: string;
}

declare type Location = google.maps.LatLng | google.maps.LatLngLiteral | undefined;

declare interface ILocationSearchInputProps {
	disabled: boolean;
	onChange: (address: string, latLng: location) => void;
}

declare interface ILocationSearchInputState {
	address: string;
}

declare interface ISuggestionListProps {
	loading: boolean;
	hotels: ISubscriber[];
	selected: ISubscriber | {};
	onChange: (hotel: ISubscriber) => {};
}

declare interface IGoogleMapsProps {
	isMarkerShown: boolean;
	location: google.maps.LatLng;
	children?: React.ReactNode;
}

declare interface ISignupStates {
	steps: ['User Details', 'Plans', 'Channels and Competitors', 'Competitor Weightage', 'Payment'];
	activeStep: number;
	userInfo: IUserInfo;
	adults: number;
	los: number;
	subscriber: ISubscriber | {};
	plan: IPlan | {};
	competitors: ICompetitor[];
	channels: IChannels[];
	uuid: string | null;
	onboardMessage: string | null;
	showOnboardScreen: boolean;
	views: {
		userDetails: IUserDetailsStates;
		plans: IPlansState;
		competitorDetails: ICompetitorDeatilsStates;
		competitorWeightage: ICompetitorWeightageStates;
	};
}

declare interface IUserDetailsProps {
	loading: boolean;
	isFetching: boolean;
	hasError: boolean;
	isSearchDisabled: boolean;
	userInfo: IUserInfo;
	hotels: ISubscriber[];
	location: Location | {};
	subscriber: ISubscriber | {};
	showSuggestion: boolean;
	suggestionLoading: boolean;
	isNextDisabled: boolean;
	actions: IUserDetailsActions;
}

declare interface IUserDetailsActions {
	changeLocation: (address: string, latLng: object, validateFields: object) => void;
	changeHotel: (hotel: ISubscriber) => void;
	setError: (erro: booleanr) => void;
	setSearchDisabled: (disabled: boolean) => void;
	moveToNextStep: (userInfo: IUserInfo) => void;
}

declare interface IPlansProps {
	plans: object;
	plan: string;
	frequency: string;
	planDetail: IPlan;
	frequencies: string[];
	channels: number;
	competitors: number;
	expectedPrice: string;
	loading: false;
	actions: IPlansActions
}

declare interface IPlansActions {
	fetchPlans: () => {};
	changePlan: (plan: string) => void;
	updateChannels: (channels: number) => void;
	updateCompetitors: (competitors: number) => void;
	updateFrequency: (frequency: string) => void;
	updatePlanDetail: (planDetail: object) => void;
	updateExpectedPrice: (expectedPrice: string) => void;
	moveToNextStep: () => void;
	moveToPrevStep: () => void;
	
}

declare interface IPlan {
	channels: number;
	competitors: number;
	amount: number;
	frequency: string;
	currency: string;
}

declare interface ICompetitorDeatilsProps {
	loading: boolean;
	value: string;
	competitors: ICompetitor[];
	channels: IChannels[];
	hotelEanId: string;
	searchedValue: string;
	subscriber: ISubscriber;
	planDetail: IPlan;
	actions: ICompetitorDeatilsActions
}

declare interface IChannels {
	name: string;
	checked: boolean;
}

declare interface ICompetitorDeatilsActions {
	fetchChannelsAndCompetitors: () => {},
	setChannels: (channels: IChannels[]) => void
	setCompetitors: (competitors: ICompetitor[]) => void;
	setSearchedValue: (searchedValue: string) => void;
	moveToNextStep: (channels: IChannels[], competitors: ICompetitor[]) => void;
	moveToPrevStep: () => void,	
}

declare interface ICompetitorWeightageProps {
	loading: boolean;
	weightageError: boolean;
	dataSource: any[];
	competitorsWeightage: ICompetitor[];
	los: number;
	adults: number;
	total: number;
	actions: ICompetitorWeightageActions;
}

declare interface ICompetitorWeightageActions {
	getCompetitorWeightage: () => {};
	setWeightageError: () => void;
	updateWeightage: (eanhotelid: string, value: number | undefined) => void;
	moveToNextStep: (los: number, adults: number) => void;
	moveToPrevStep: () => void;
}

declare interface IOnboardProps {
	uuid?: string | null;
	message: string | null;
}

declare interface IOnboardState {
	uuid?: string | null;
	message: string | null;
}

declare interface IPaymentProps {
	saveDetails: (stripeToken: string) => void;
	prevStep: () => void;
}

declare interface ICheckoutFormProps extends IPaymentProps {
	stripe: Stripe | null;
	elements: StripeElement | null;
}

declare interface ICheckoutFormState {
	loading: boolean;
}

declare interface ISwitchProps {
	children: string | ReactNode;
	step: number;
}

declare interface ISEOProps {
	title: string;
	description: string;
	keywords: string;
	openGraphTags: {};
}

declare interface IBannerProps {
	title: string;
	subtitle: string;
	description: string;
	image: string;
}
declare interface IdataSourceBannerProps {
	dataSource: IBannerProps;
}
declare interface ISectionProps {
	header?: string;
	title?: string;
	id?: string;
	className?: string;
	children: JSX.Element[] | JSX.Element;
}
declare interface IAboutComponentProps {
	image: string;
	title: string;
	designation: string;
	description: string;
	mailLink: string;
	linkedInUrl: string;
}
declare interface IdataSourceAboutComponentProps {
	dataSource: IAboutComponentProps;
}
declare interface IOptimizerComponentProps {
	image: string;
	description: string;
}
declare interface IdataSourceOptimizerComponentProps {
	dataSource: IOptimizerComponentProps;
}
declare interface IProductSectionProps {
	className: string;
	image: string;
	description: string;
	title: string;
}
declare interface IdataSourceProductSectionProps {
	dataSource: IProductSectionProps;
}
declare interface ITestimonialSectionProps {
	title: string;
	message: string;
}
declare interface IdataSourceTestimonialSectionProps {
	dataSource: ITestimonialSectionProps;
}
declare interface IHeaderProps {
	isMobileView: boolean;
	showNavigations: boolean;
}

declare interface IHeaderState {
	fixed: boolean;
	isHome: boolean;
	showNavigations: boolean;
}

declare interface IPlansCardProps {
	title: string;
	plan: IPlan;
	expectedPrice: string;
	frequency: string;
	frequencies: string[];
	changeChannels: (value: number) => void;
	changeCompetitors: (value: number) => void;
	changeFrequency: (value: string) => void;
}

declare interface IPlanSection {
	selectedPlan: string
}
