//<script>
(() => {
    const tb = document.querySelector('#bandsForm tbody')
    const U30_bands = [
        // 4G LTE
        { band: 2, type: '4G', freq: 1930, mode: 'LTE-FDD', carrier: '' }, // PCS
        { band: 4, type: '4G', freq: 2110, mode: 'LTE-FDD', carrier: '' }, // AWS-1
        { band: 7, type: '4G', freq: 2600, mode: 'LTE-FDD', carrier: '' }, // IMT-E
        { band: 12, type: '4G', freq: 729, mode: 'LTE-FDD', carrier: '' }, // 700 MHz Lower A/B/C
        { band: 17, type: '4G', freq: 734, mode: 'LTE-FDD', carrier: '' }, // 700 MHz Lower B/C
        { band: 20, type: '4G', freq: 800, mode: 'LTE-FDD', carrier: '' }, // 800 MHz DD
        { band: 28, type: '4G', freq: 785, mode: 'LTE-FDD', carrier: '' }, // 700 MHz APT
        { band: 42, type: '4G', freq: 3500, mode: 'LTE-TDD', carrier: '' }, // 3.5 GHz TDD
        { band: 43, type: '4G', freq: 3700, mode: 'LTE-TDD', carrier: '' }, // 3.7 GHz TDD
        { band: 66, type: '4G', freq: 2140, mode: 'LTE-FDD', carrier: '' }, // Extended AWS

        // 5G NR
        { band: 3, type: '5G', freq: 1800, mode: 'FDD', carrier: '' }, // n3
        { band: 7, type: '5G', freq: 2600, mode: 'FDD', carrier: '' }, // n7
        { band: 20, type: '5G', freq: 800, mode: 'FDD', carrier: '' }, // n20
        { band: 38, type: '5G', freq: 2600, mode: 'TDD', carrier: '' }, // n38
        { band: 40, type: '5G', freq: 2350, mode: 'TDD', carrier: '' }, // n40
        { band: 71, type: '5G', freq: 639, mode: 'FDD', carrier: '' }, // n71
        { band: 77, type: '5G', freq: 3700, mode: 'TDD', carrier: '' }  // n77
    ]


    const template5G = U30_bands.map(({ band, type, mode, freq }) => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <tr>
                <td><input type="checkbox" data-type="${type}" data-band="${band}" class="blur-px"></td>
                <td>${type == '4G' ? "B" : "N"}${band}</td>
                <td>${freq}</td>
                <td>${mode}</td>
                <td>-</td>
            </tr>
            `
        return tr
    })
    template5G.forEach(t => {
        tb.appendChild(t)
    })
})()
// </script>