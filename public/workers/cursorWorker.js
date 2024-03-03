self.onmessage= (e) => {
    const { clientX, clientY } = e.data;
    self.postMessage({ clientX, clientY });
}