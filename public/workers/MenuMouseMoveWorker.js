
// public/menuMouseMoveWorker.js
self.onmessage = function(e) {
    const { clientX, clientY, rect,menu } = e.data;
    const s = clientX - rect.left;
    const o = clientY - rect.top ;
    const scale =  1.2;

    self.postMessage({ s, o, scale });
};
