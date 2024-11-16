# Just, one more thing...

A lightweight Chrome Extension to replace the "New Tab" page with a simple editable text box.

## Technologies Used

- [Google Chrome Extension Manifest v3](https://developer.chrome.com/docs/extensions/reference/manifest)
- [`chrome.storage` API](https://developer.chrome.com/docs/extensions/reference/api/storage)

See also [referenced resources](REFERENCES.md)

## Development

- Clone this repository.
- Load this directory in Chrome as an [unpacked extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked).
- Open a new tab while the extension is enabled.

## Known Issues.

Once you have edited the text within the "New Tab" page, the focus will not return to the Address Bar. This is a limitation built into Chrome for extensions that replace the New Tab page. 
- Considering it roughly acceptable behaviour, as the purpose of this extension is to present a highly visible single reminder.
- Additionally, on opening a New Tab, the focus _is_ on the Address Bar, so this issue is only encountered after you have deliberately switched focus to write some new text, and presumably intend to complete a different task than open another webpage and want a reminder of that.

## License

This extension is authored by Moss Nye and is licensed under the [Apache License, Version 2.0](LICENSE.md).