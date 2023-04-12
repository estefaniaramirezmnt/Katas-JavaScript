function convertingString(dna) {
    return dna.replace(/[ATCG]/g, function (match) {
        switch (match) {
            case 'A':
                return 'T';
            case 'T':
                return 'A';
            case 'C':
                return 'G';
            case 'G':
                return 'C';
        }
    });
}

function convertingString2(dna) {
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}

function convertinString3(str) {
    var correspondences = {
        C: 'G',
        G: 'C',
        A: 'T',
        T: 'A'
    };

    return str.split('').map(function (value) {
        return correspondences[value];
    }).join('');
}