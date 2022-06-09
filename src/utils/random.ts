export function selectRandomString (possibilities: string[], exceptions: string[] = []) {
    while (1) {
        const choice = possibilities[ Math.floor (Math.random() * possibilities.length) ];

        if (!exceptions.find (element => element === choice)) return choice;
    }
}