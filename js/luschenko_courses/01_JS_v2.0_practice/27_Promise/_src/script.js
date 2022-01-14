

let a = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1')
        .then(data => {
            resolve(data.text());
        })

});

let b = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=alex')
        .then(data => {
            resolve(data.text());
        })

});

Promise.all([a, b]).then(value => {
    console.log(value);
    console.log(value[0]);
    console.log(value[1]);
});

