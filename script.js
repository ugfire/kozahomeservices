$("#form").submit((e) => {
    e.preventDefault()

    let username = $("#profile").val()

    $.instagramFeed({
        'username':username,
        'container':"#instagram-feed-demo"
    })
})