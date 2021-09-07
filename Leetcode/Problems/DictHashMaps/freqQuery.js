

function freqQuery(queries) {
    let counter = {};
    let frequencies = {};
    let output = [];
    for (let i = 0; i < queries.length; i++) {
        let action = queries[i][0], value = queries[i][1];
        let oldCounter = (counter[value] || 0);
        let oldFrequency = frequencies[oldCounter] || 0;
        if (action === 1) {
            //insert
            counter[value] = oldCounter + 1;
            if (oldCounter > 0)
                frequencies[oldCounter]--;
            frequencies[oldCounter + 1] = (frequencies[oldCounter + 1] ||0 ) + 1;
        } else
            if (action === 2 && counter[value]) {
                //remove
                counter[value] = oldCounter - 1;
                frequencies[oldCounter] = frequencies[oldCounter] - 1;
                if (oldCounter > 0)
                    frequencies[oldCounter - 1]--;
            } else
                if (action === 3) {
                    if (frequencies[value] > 0) {
                        output.push("1");
                    } else {
                        output.push("0");
                    }
                }
    }
    return output;
}

let m = [[1, 5],
[1, 6],
[3, 2],
[1, 10],
[1, 10],
[1, 6],
[2, 5],
[2, 5],
[3, 2]];
console.log(freqQuery(m));
