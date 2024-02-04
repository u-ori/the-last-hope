gameState = {
    installed: localStorage.getItem("autosave") ? JSON.parse(localStorage.getItem("autosave")).installed : [],
    autosave: true
}

function autoSave() {
    if (!gameState.autosave) {
        return;
    }

    localStorage.setItem("autosave", JSON.stringify({
        commandBufferLines: commandBuffer.lines,
        commandBufferScroll: commandBuffer.scroll,
        gameBufferLines: theLastHopeBuffer.lines,
        gameBufferScroll: theLastHopeBuffer.scroll,
        installed: gameState.installed
    }));
}