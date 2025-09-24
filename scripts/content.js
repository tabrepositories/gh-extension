
//get username of the currently logged-in account from some random element on the page.  what happens if nobody's logged in tho?
let loginName = document.querySelector("button.Button--invisible.Button--medium.Button.Button--invisible-noVisuals.color-bg-transparent.p-0");
loginName = loginName.getAttribute("data-login");
console.log(loginName);



function main () {
	const chopped = window.location.href.split('/');
	switch(chopped[3].split("?")[0]) {
		case "settings":
			switch (chopped[4]) {
				case "profile":
					let checkbox = document.querySelector("div div.form-group.form-checkbox");
					checkbox.setAttribute("style", "display: none !important;");
					break;
			}
			break;
		case loginName:
			
			let checkbox = document.querySelector("form.js-profile-editable-form .color-fg-muted.mt-2.d-flex.flex-items-center.flex-wrap");
			if (checkbox) {
				checkbox.setAttribute("style", "display: none !important;");
			}
		
			//const m = new MutationObserver((e) => {
				//if ([...document.body.classList].indexOf("mine")+1) {
					//f();
				//}
			//})
			//m.observe(document.querySelector("body.logged-in.env-production.page-responsive.page-profile"), { attributes: true });
			//if (document.querySelector("button.pinned-items-setting-link.Button--link.Button--medium.Button span.Button-label")?.textContent === "Customize your pins") { // Way to tell if on the logged-in account's overview page.
		
			//}
	}
}

const m = new MutationObserver((e) => {
		main();
});

m.observe(document.querySelector("body"), { attributes: true });


main();


