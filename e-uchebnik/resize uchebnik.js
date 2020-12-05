function scalePages() {
	let outerPagesWrapper = document.querySelector('.outer-pages-wrapper');
	let innerPagesWrapper = document.querySelector('.inner-pages-wrapper');
	let main = document.querySelector('main');
	let ebookTop = document.querySelector('.ebook-top');
	let ebookButtons = document.querySelector('.ebook-buttons');
	let outlineButton = document.querySelector('#outline-button');

	if (outerPagesWrapper && innerPagesWrapper && main) {
		ebookTop?.remove();
		ebookButtons?.remove();
		outlineButton?.remove();

		main.style.height = '100%';

		outerPagesWrapper.style.maxWidth = '950px';
		outerPagesWrapper.style.width = 'unset';
		outerPagesWrapper.style.height = '420px';
		outerPagesWrapper.style.overflow = 'auto';

		innerPagesWrapper.style.transform = 'scale(1.5)';
	}
}

function scaleIframe() {
	let resourceIframe = document.getElementById('resource-iframe');
	let resourceDialog = document.querySelector('#react-root .resource-dialog');
	
	if (resourceIframe && resourceDialog) {
		resourceIframe.style.transform = '';
		
		resourceDialog.style.transform = '';
		resourceDialog.style.width = '100%';
		resourceDialog.style.height = '100%';
		resourceDialog.style.maxWidth = 'unset';
		resourceDialog.style.maxHeight = 'unset';
	}
}

scalePages();
scaleIframe();

function addNewStyle(newStyle) {
    var styleElement = document.getElementById('styles_js');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'styles_js';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
}

function transformDialog() {
	let dialogHeader = document.querySelector('.ic_page_panel.ic_static_header');
	dialogHeader?.remove();
	
	addNewStyle('.ic_page {top: 0 !important;}');
	
	if (!document.getElementById('Choice1')) {
		addNewStyle('#Text1 {top: 70px !important;}');
	}
	
	addNewStyle('#Choice1 {top: 70px !important;}');
	addNewStyle('#Choice1 > table.ic_choice {height: unset !important;}');
	addNewStyle('#Check_Button1 {top: 325px !important;}');
	addNewStyle('#Reset1 {top: 325px !important;}');
	addNewStyle('#Show_Answers1 {top: 325px !important;}');
	
	addNewStyle('#Page_Progress1 {top: 385px !important;}');
	addNewStyle('#Page_Counter1 {top: 385px !important;} .pagecounter {color: black !important;}');
	addNewStyle('#Text4 {top: 385px !important;}');
	addNewStyle('#Text2 {top: 385px !important;}');
	addNewStyle('.ic_button_nextpage {top: 365px !important;}');
}

transformDialog();

