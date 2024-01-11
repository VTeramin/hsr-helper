export async function getCharactersData(imgSource) {
    const requestURL = `${imgSource}/index_new/en/characters.json`;
    let charactersData = [];
    await fetch(requestURL)
        .then(response => response.json())
        .then(data => {
            const keys = Object.keys(data);
            charactersData = keys.map(key => {
                return {
                    ID: key,
                    path: data[key].path
                }
            })
        })
        .catch(error => console.log(error));
    return charactersData;
}