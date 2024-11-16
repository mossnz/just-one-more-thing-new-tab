# Resources Referenced During Development

## Google Chrome Extensions
- [Chrome Extension Samples](https://github.com/GoogleChrome/chrome-extensions-samples/)
  - [Blank New Tab Page](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api-samples/override/blank_ntp). 
  This sample extension provided the initial core of this extension. Accordingly, this informed this extension also being licensed with the [Apache License, Version 2.0](LICENSE.md).
  - [Storage](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api-samples/storage/stylizr). This sample was useful as reference while working with the `chrome.storage` API. In particular, using Event Listeners and providing a default value on `storage.get`

- [Chrome for Developers Extensions &raquo;	Chrome Extensions](https://developer.chrome.com/docs/extensions)
  - [`chrome.storage` API Reference](https://developer.chrome.com/docs/extensions/reference/api/storage). In particular, learning about the different kinds of storage available to Extenstions.


## Mozilla Developer Network

- [Mozilla Developer Network](https://developer.mozilla.org)
  - [Content Editable Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable). Learning about the `contenteditable` attribute was the original seed of an idea to develop this extension.
  - [Input Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event). Learning about the `input` event _and that it applied to_ `contenteditable` provided a way to bridge editing text into saving it.
  - [Add Event Listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). 


## Stack Overflow

- [End editing in `contentenditable` on return key](https://stackoverflow.com/questions/67017802/end-editing-in-contenteditable-on-return-key). Adopted this approach, with additional improvement of re-enabled editing instantly via an Event Listener on `focusout` event.
- [How to trigger focus to the Google Chome Address Bar](https://stackoverflow.com/questions/44586548/how-to-trigger-focus-to-the-google-chrome-address-bar-omnibox). After you type in the text box provided by this extension, focus does not return to the Address Bar. There's no way around this. Shouldn't be too much of a hassle, as when you open a new tab, the Address Bar is focused by default, so this issue only affects you when you do edit the text, in which case some small friction of moving onto another webpage is probably okay.