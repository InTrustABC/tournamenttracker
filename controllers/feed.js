exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts:
            [{
                _id: '1',
                title: 'First Post',
                content: 'This is the first post!',
                imageUrl: 'images/treasureCruise',
                creator: {
                    name: 'Andi'
                }, createdAt: new Date()
            }]
    });
};

exports.createPost = (req, res, next) => {
    // Create post in db
    const title = req.body.title;
    const content = req.body.content;
    console.log(title, content);
    res.status(201).json({
        message: 'Post created successfully!',
        post: { id: new Date().toISOString(), title: title, content: content }
    });
}