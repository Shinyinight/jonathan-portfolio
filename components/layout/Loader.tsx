interface LoaderProps {
	loading: boolean;
}

const Loader = ({ loading }: LoaderProps) => {
	if (!loading) return null;

	return (
		<div
			className="fixed top-0 left-0 z-50 grid items-center justify-center w-full h-screen animate-fade-out"
			style={{ backgroundImage: "url('background.png')" }}
		>
			<div className="flex animate-fade-in-out">
				<div className="z-10 animate-slide-right" style={{ fontSize: '60px', marginRight: '2px' }}>
					&gt;
				</div>
				<p
					className="relative transition-all w-28 h-28 animate-clip-path"
					style={{ fontSize: '60px', letterSpacing: '2px' }}
				>
					jfm
				</p>
			</div>
		</div>
	);
};

export default Loader;
