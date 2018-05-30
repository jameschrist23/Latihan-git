const input = 5

for ( let i = 1; i <= input; i++) {
    let stars = ""
    for ( let j = 1; j <= input ; j++ ){
        stars = "*" + stars
    }
    console.log(stars)
    console.log('\n')
}
