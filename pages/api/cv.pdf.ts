export default async (req, res) => {
	const PROJECT = 'FXTFq7oDMo0VkMgcZPBQvk';
	const ITEMID = '3%3A3';
	const FIGMA_TOKEN = process.env.FIGMA_TOKEN;

	const response = await fetch(`https://api.figma.com/v1/images/${PROJECT}?ids=${ITEMID}&format=pdf`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json', 'X-Figma-Token': FIGMA_TOKEN },
	}).then((response) => response.json());

	const urlFile = response.images['3:3'];

	const file = await fetch(urlFile, {
		method: 'GET',
	}).then((response) => response.blob());

	const buffer = await file.arrayBuffer();

	res.setHeader('Content-Type', 'application/pdf');
	res.setHeader('Content-Length', file.size);
	res.write(toBuffer(buffer), 'binary');
	res.end();
};

function toBuffer(ab) {
	const buf = Buffer.alloc(ab.byteLength);
	const view = new Uint8Array(ab);
	for (let i = 0; i < buf.length; ++i) {
		buf[i] = view[i];
	}
	return buf;
}
