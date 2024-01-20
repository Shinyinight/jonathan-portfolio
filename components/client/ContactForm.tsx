"use client";

import { useState } from "react";
import Button from "./Button";

const ContactForm = () => {
	const [loading, setLoading] = useState(false);

	const sendEmail = async (e) => {
		e.preventDefault();
		if (e.target.is_bot.value !== "") return;
		if (e.target.message.split(" ").length === 1) return;

		setLoading(true);
		await fetch("/api/email", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				user_name: e.target.user_name.value,
				user_email: e.target.user_email.value,
				message: e.target.message.value,
				sender_os: navigator.userAgent,
			}),
		});
		setLoading(false);
	};

	return (
		<form
			className="flex flex-col items-center gap-6 mt-24 xl:mx-auto xl:w-[900px] mx-6 md:px-0"
			onSubmit={sendEmail}
		>
			<input type="hidden" name="contact_number" />
			<div className="flex flex-col items-start justify-start w-full gap-2 row">
				<label className="text-md">Name</label>
				<input
					placeholder="John Doe"
					className="w-full px-4 py-2 border-[1px] rounded border-neutral-700 bg-dark focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent hover:bg-neutral-900 bg-neutral-950"
					type="text"
					name="user_name"
					required
				/>
			</div>
			<div className="flex flex-col items-start justify-start w-full gap-2 row">
				<label className="text-md">Email</label>
				<input
					placeholder="johndoe@gmail.com"
					className="w-full px-4 py-2 border-[1px] rounded border-neutral-700 bg-dark focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent hover:bg-neutral-900 bg-neutral-950"
					type="email"
					name="user_email"
					required
				/>
			</div>
			<div className="flex flex-col items-start justify-start w-full gap-2 row">
				<label className="text-md">Message</label>
				<textarea
					placeholder="Hi! I want to talk with you"
					className="w-full h-40 px-4 py-2 border-[1px] rounded resize-none border-neutral-700 bg-dark focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent hover:bg-neutral-900 bg-neutral-950"
					name="message"
					required
				/>
			</div>
			<input
				className="w-full px-4 py-2 border-[1px] rounded border-neutral-700 bg-dark focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent hover:bg-neutral-900 bg-neutral-950"
				type="hidden"
				name="is_bot"
			/>
			<div className="flex justify-end w-full gap-2 submit row">
				<Button variant={"primary"} type="submit">
					{loading ? (
						<svg
							className="text-white h-7 animate-spin"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<title>Loading</title>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							/>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							/>
						</svg>
					) : (
						"Send"
					)}
				</Button>
			</div>
		</form>
	);
};

export default ContactForm;
