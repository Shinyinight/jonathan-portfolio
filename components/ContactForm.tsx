import { MutableRefObject, useState } from 'react';

interface ContactFormProps {
	contactFormRef: MutableRefObject<any>;
}

const ContactForm = ({ contactFormRef }: ContactFormProps) => {
	const [loading, setLoading] = useState(false);

	const sendEmail = async (e) => {
		e.preventDefault();

		setLoading(true);
		await fetch('/api/email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				user_name: e.target.user_name.value,
				user_email: e.target.user_email.value,
				message: e.target.message.value,
				is_bot: e.target.is_bot.value,
				sender_os: navigator.userAgent,
			}),
		});
		setLoading(false);
	};

	return (
		<form className="flex flex-col items-center gap-6 mt-24 contact-form" onSubmit={sendEmail}>
			<input type="hidden" name="contact_number" />
			<div className="flex flex-col items-start w-5/6 gap-4 2xl:w-5/12 xl:items-center xl:flex-row xl:w-4/6 row">
				<label className="w-12 text-xl text-left xl:w-24">Name</label>
				<input
					ref={contactFormRef}
					placeholder="Name"
					className="w-full px-4 py-2 rounded bg-dark focus:outline-none focus:ring-4 focus:ring-white focus:border-transparent ring-2 ring-zinc-900"
					type="text"
					name="user_name"
					required
				/>
			</div>
			<div className="flex flex-col items-start w-5/6 gap-4 2xl:w-5/12 xl:items-center xl:flex-row xl:w-4/6 row">
				<label className="w-12 text-xl text-left xl:w-24">Email</label>
				<input
					placeholder="Email"
					className="w-full px-4 py-2 rounded bg-dark focus:outline-none focus:ring-4 focus:ring-white focus:border-transparent ring-2 ring-zinc-900"
					type="email"
					name="user_email"
					required
				/>
			</div>
			<div className="flex flex-col items-start w-5/6 gap-4 2xl:w-5/12 xl:items-center xl:flex-row xl:w-4/6 row">
				<label className="w-12 text-xl text-left xl:w-24">Message</label>
				<textarea
					placeholder="Hi! I want to talk with you"
					className="w-full h-40 px-4 py-2 rounded resize-none bg-dark focus:outline-none focus:ring-4 focus:ring-white focus:border-transparent ring-2 ring-zinc-900"
					name="message"
					required
				/>
			</div>
			<input
				className="w-full px-4 py-2 rounded bg-dark focus:outline-none focus:ring-4 focus:ring-white focus:border-transparent ring-2 ring-zinc-900"
				type="hidden"
				name="is_bot"
			/>
			<div className="flex justify-end w-5/6 gap-4 2xl:w-5/12 xl:w-4/6 submit row">
				<button
					className="flex justify-center w-20 px-4 py-2 text-xl rounded cursor-pointer bg-dark font-alegreya focus:outline-none focus:ring-4 focus:ring-white focus:border-transparent ring-2 ring-zinc-900"
					type="submit"
					value="Send"
				>
					{loading ? (
						<svg
							className="text-white h-7 animate-spin"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
					) : (
						'Send'
					)}
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
