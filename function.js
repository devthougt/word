function Field() {}

Field.prototype.isEmpty = function isEmpty(field) {
    if (field == "") {
        return true;
    } else {
        return false;
    }
}

Field.prototype.checkFileds = function checkFileds() {
    for (var i = 0; i < arguments.length; i++) {
        var field = arguments[i];
        if (field === null)
            return true;
    }

    return false;
}

/* 

document.getElementById('full-screen').addEventListener("click", function() {
    var
        el = document.documentElement,
        rfs =
        el.requestFullScreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen;
    rfs.call(el);
}); */
// Launch fullscreen for browsers that support it!