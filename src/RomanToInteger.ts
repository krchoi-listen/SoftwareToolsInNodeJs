class RomanToInteger {
    public RomanToInt(strRoman: string) {
        let nResult: number = 0;
        const mapRomans = new Map<string, number> ([
            ["I", 1],
            ["V", 5],
            ["X", 10],
            ["L", 50],
            ["C", 100],
            ["D", 500],
            ["M", 1000]
        ]);

        for (let i = 0; i < strRoman.length - 1; i++) {
            if ( mapRomans.get(strRoman.charAt(i)) < mapRomans.get(strRoman.charAt(i + 1)) ) {
                nResult -= mapRomans.get(strRoman.charAt(i));
            } else {
                nResult += mapRomans.get(strRoman.charAt(i));
            }
        }

        nResult += mapRomans.get(strRoman.charAt(strRoman.length - 1));

        return nResult;
    }
}

export default RomanToInteger;
