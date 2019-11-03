function switchShadows() {
    Array.from(document.getElementsByClassName('title')).forEach(title => {
        var shadowWidth = Math.floor((Math.random() * 15) + 1);
        var shadowHeight = Math.floor((Math.random() * 8) + 1);
        title.style.boxShadow = shadowWidth + 'em ' + shadowHeight + 'em ' + '4em 0.25em white';
    });
};
document.onmouseover = () => {
    switchShadows();
    if (event.target.localName == 'a') {
        document.body.style.backgroundColor = 'rgba(129, 137, 255, 0.8)';
        Array.from(document.getElementsByTagName('a')).forEach(link => {
            link.style.textDecorationColor = 'rgba(232, 204, 247, 0.997)';
        })
    } else {
        document.body.style.backgroundColor = '';
        Array.from(document.getElementsByTagName('a')).forEach(link => {
            link.style.textDecorationColor = '';
        });
    };
};