let theLastHopeBuffer = new Buffer(
    autosave ? autosave.gameBufferLines : 
    ["[Press `Esc` to exit the game]",
    "",
    "Juno wakes up in an abandoned home. There is barely any light. The ",
    "door to bathroom is slightly open. The other door is locked. There ",
    "is a computer in the middle of the room. ",
    ""], 

    "You: ", 
    
    autosave ? autosave.gameBufferScroll : 0
, messageParser);