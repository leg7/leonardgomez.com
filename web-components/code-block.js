import * as templates from "/web-components/templates/utils.js";

class CodeBlock extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.attachShadow({ mode: "open" });

		templates.getTemplate("code-block").then(t => {
			this.shadowRoot.appendChild(t.content.cloneNode(true));

			const code = this.querySelector('[slot="content"]').textContent;

			const copyTooltipText = this.shadowRoot.querySelector('div.tooltip > span.tooltip-text');
			const originalTooltipText = copyTooltipText.textContent;

			const copyButton = this.shadowRoot.querySelector('button.copy-text');
			copyButton.addEventListener("click", () => {
				navigator.clipboard.writeText(code)
					.then(() => copyTooltipText.textContent = "Copied!");
			});

			copyButton.addEventListener("mouseleave", () => {
				copyTooltipText.textContent = originalTooltipText;
			});
		});
	}
}

customElements.define("code-block", CodeBlock);
