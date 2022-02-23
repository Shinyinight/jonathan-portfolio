import { MutableRefObject } from 'react';

interface ContactFormProps {
	contactFormRef: MutableRefObject<any>;
}

const ContactForm = ({ contactFormRef }: ContactFormProps) => {
	const sendEmail = async (e) => {
		e.preventDefault();

		await fetch('/api/email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				user_name: e.target.user_name.value,
				user_email: e.target.user_email.value,
				message: e.target.message.value,
			}),
		});
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
				/>
			</div>
			<div className="flex flex-col items-start w-5/6 gap-4 2xl:w-5/12 xl:items-center xl:flex-row xl:w-4/6 row">
				<label className="w-12 text-xl text-left xl:w-24">Email</label>
				<input
					placeholder="Email"
					className="w-full px-4 py-2 rounded bg-dark focus:outline-none focus:ring-4 focus:ring-white focus:border-transparent ring-2 ring-zinc-900"
					type="email"
					name="user_email"
				/>
			</div>
			<div className="flex flex-col items-start w-5/6 gap-4 2xl:w-5/12 xl:items-center xl:flex-row xl:w-4/6 row">
				<label className="w-12 text-xl text-left xl:w-24">Message</label>
				<textarea
					placeholder="Hi! I want to talk with you"
					className="w-full h-40 px-4 py-2 rounded resize-none bg-dark focus:outline-none focus:ring-4 focus:ring-white focus:border-transparent ring-2 ring-zinc-900"
					name="message"
				/>
			</div>
			<div className="flex justify-end w-5/6 gap-4 2xl:w-5/12 xl:w-4/6 submit row">
				<input
					className="px-4 py-2 text-xl rounded cursor-pointer bg-dark font-alegreya focus:outline-none focus:ring-4 focus:ring-white focus:border-transparent ring-2 ring-zinc-900"
					type="submit"
					value="Send"
				/>
			</div>
		</form>
	);
};

export default ContactForm;
