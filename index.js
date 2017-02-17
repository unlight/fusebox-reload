FuseBox.addPlugin({
    hmrUpdate: function(data) {
        var type = data && data.type;
        if (type !== 'reload') return;
        if (typeof document !== 'undefined') {
            document.location.reload();
            return true;
        }
    }
});
