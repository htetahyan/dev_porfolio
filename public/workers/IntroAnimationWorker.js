self.onmessage = (e)=> {
    const { s, o, scale } = e.data;
    self.postMessage({ s, o, scale });
}