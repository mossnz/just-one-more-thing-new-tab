const storage = chrome.storage.sync

const oneMoreThing = document.querySelector("div#one-more-thing")

async function getOneMoreThingFromStorage() {
    const defaultThing = 'Just, one more thing...'
    await storage.get({ oneThing: defaultThing }, (items) => {
        oneMoreThing.textContent = items.oneThing
    })
}

addEventListener("load", getOneMoreThingFromStorage())

oneMoreThing.addEventListener("input", async () => {
    await storage.set({ oneThing: oneMoreThing.textContent })
})

oneMoreThing.addEventListener("keypress", (keyPressed) => {
    if (keyPressed.key === 'Enter') {
        keyPressed.preventDefault() // do not create a new line
        oneMoreThing.removeAttribute('contenteditable') // end editing
    }
})

oneMoreThing.addEventListener("focusout", () => {
    oneMoreThing.setAttribute('contentEditable','plaintext-only') 
    // once editing has been ended by pressing Enter, re-enable editing.
})

chrome.storage.sync.onChanged.addListener((changes) => {
    oneMoreThing.textContent = changes.oneThing.newValue
})