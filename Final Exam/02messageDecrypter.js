function messageDecrypter(input) {

    let allMessages = Number(input.shift());

    for (let index = 0; index < allMessages; index++) {
        let messages = input[index];

        let pattern = /^([$%])([A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/g;
        let matched = pattern.exec(messages);

        if (matched) {
            let validMessages = String.fromCharCode(matched[3], matched[4], matched[5]);
            let tag = matched[2];
            let decryptedMessage = validMessages;
            console.log(`${tag}: ${decryptedMessage}`);
        } else {
            console.log("Valid message not found!");
        }
    }
}

// messageDecrypter((["4",
//     "$Request$: [73]|[115]|[105]|",
//     "%Taggy$: [73]|[73]|[73]|",
//     "%Taggy%: [118]|[97]|[108]|",
//     "$Request$: [73]|[115]|[105]|[32]|[75]|"])
// );

messageDecrypter((["3",
    "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
    "$tAGged$: [97][97][97]|",
    "$Request$: [73]|[115]|[105]|true"])
);