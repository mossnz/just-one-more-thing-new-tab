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
    console.log(oneMoreThing.textContent)
    await storage.set({ oneThing: oneMoreThing.textContent })
})

chrome.storage.sync.onChanged.addListener((changes) => {
    oneMoreThing.textContent = changes.oneThing.newValue
})