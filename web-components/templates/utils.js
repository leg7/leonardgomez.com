export async function getTemplate(templateName) {
	const response = await fetch(`/web-components/templates/${templateName}.html`);
	const text     = await response.text();
	const parser   = new DOMParser();
	const doc      = parser.parseFromString(text, 'text/html');
	return doc.getElementById(templateName);
}
