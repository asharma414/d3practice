const svg = d3.select('svg');
const width = +svg.attr('width');
const height = +svg.attr('height');

d3.csv('https://gist.github.com/asharma414/0a5acc74925a0feb6ebd352fed4fbdf6/raw/78da52a64dccc63c745c4a6f7d89fdd0e35d8444/btc.csv')
    .then(data => {
        data.forEach(d => {
            d.close = +d.close,
            d.date = new Date(d.date)
        })
        render(data)
    })