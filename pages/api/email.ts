// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
	var data = {
		service_id: process.env.MAILJET_SERVICE_ID,
		template_id: process.env.MAILJET_TEMPLATE_ID,
		user_id: process.env.MAILJET_USER_ID,
		template_params: req.body,
		accessToken: process.env.MAILJET_ACCESSTOKEN,
	};

	await fetch("https://api.emailjs.com/api/v1.0/email/send", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});

	res.status(200).json({});
};
