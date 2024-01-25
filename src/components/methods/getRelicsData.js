export async function getRelicsData(imgSource) {
    const requestURL = `${imgSource}/index_new/en/relic_sets.json`;
    let relicsData = [];
    await fetch(requestURL)
        .then(response => response.json())
        .then(data => {
            const keys = Object.keys(data);
            relicsData = keys.map(key => {
                return {
                    ID: key,
                    description: data[key].desc
                }
            })
        })
        .catch(error => console.log(error));
    return relicsData;
}