module.exports = {
    convertLength: (unit1, unit2, number) => {
        const conversionRates = {
            mm: { mm: 1, cm: 0.1, m: 0.001, km: 0.000001 },
            cm: { mm: 10, cm: 1, m: 0.01, km: 0.00001 },
            m: { mm: 1000, cm: 100, m: 1, km: 0.001 },
            km: { mm: 1000000, cm: 100000, m: 1000, km: 1 }
        };
        return number * conversionRates[unit1][unit2];
    },
    convertWeight: (unit1, unit2, number) => {
        const conversionRates = {
            g: { g: 1, kg: 0.001, lb: 0.00220462 },
            kg: { g: 1000, kg: 1, lb: 2.20462 },
            lb: { g: 453.592, kg: 0.453592, lb: 1 }
        };
        return number * conversionRates[unit1][unit2];
    },
    convertTemperature: (unit1, unit2, number) => {
        if (unit1 === unit2) return number;
        
        if (unit1 === 'C') {
            if (unit2 === 'F') return (number * 9/5) + 32;
            if (unit2 === 'K') return number + 273.15;
        }
        
        if (unit1 === 'F') {
            if (unit2 === 'C') return (number - 32) * 5/9;
            if (unit2 === 'K') return (number - 32) * 5/9 + 273.15;
        }
        
        if (unit1 === 'K') {
            if (unit2 === 'C') return number - 273.15;
            if (unit2 === 'F') return (number - 273.15) * 9/5 + 32;
        }
        
        return number;
    }
};
