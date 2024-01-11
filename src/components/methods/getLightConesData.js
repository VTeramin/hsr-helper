export async function getLightConesData(imgSource) {
    let combinedData = [];
    const requestURLs = [
        `${imgSource}/index_new/en/light_cone_ranks.json`,
        `${imgSource}/index_new/en/light_cones.json`
    ];
    const requests = requestURLs.map(URL => fetch(URL));
    await Promise.all(requests)
        .then(responses => {
            return Promise.all(responses.map(resp => resp.json()));
        })
        .then(data => {
            combinedData = combineData(data, imgSource);
        })
        .catch(error => console.log(error));
    return combinedData;
}

function combineData(data, imgSource) {
    const IDs = Object.keys(data[0]);
    return IDs.map(ID => {
        return { 
            ID, 
            description: getDescription(data[0][ID]), 
            path: data[1][ID].path, 
            icon: `${imgSource}/image/light_cone_preview/${ID}.png`
        };
    }).reverse();
}

function getDescription(data) {
    const params = data.params[0];
    return data.desc
        .replace(/#\d\[(i|f\d)\]%/g, rep => `${Math.floor(params[rep[1] - 1] * 10000) / 100}%`)
        .replace(/#\d\[(i|f\d)\]/g, rep => params[rep[1] - 1]);
}