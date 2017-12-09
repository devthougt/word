window.indexedDB = window.indexedDB || window.mozIndexedDB ||
    window.webkitIndexedDb || window.msIndexedDb;

if (!window.indexedDB) {
    alert();
}

let request = window.indexedDB.open("GamePlayDb", 1),
    db,
    tx,
    store,
    index;

request.onupgradeneeded = function(e) {
    let db = request.result,
        store = db.createObjectStore("WordStore", {
            keyPath: "wID"
        }),
        index = store.createIndex("wordsIndex", "wordsIndex", { unique: false });

}

request.onerror = function(e) {
    console.log("there was an error : " + e.target.errorCode);
}

request.onsuccess = function(e) {
    db = request.result;
    tx = db.transaction("WordStore", "readwrite");
    store = tx.objectStore("WordStore");
    index = store.index("wordsIndex");

    db.onerror = function(e) {
        console.log("ERROR", e.target.errorCode);
    }

    /*   store.put({ "wID": 1, "wordsIndex": "Awesome" }); */

    let q1 = store.get(1);

    q1.onsuccess = function() {
        console.log(q1.result);
        console.log(q1.result.wordsIndex);
    }

    tx.oncomplete = function() {
        db.close();
    }
}