declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
export {};

declare global {
	interface Window {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		gtag: any;
	}
}
