const catalogURL = 'http://localhost:9001';
export async function getPostsByUserId(id){
    const response = await fetch(
        `${catalogURL}/messages/subscriber/${id}`)
        .then(res => res.json())
        .catch(err => {
            console.log('Error with getting user posts from server API: ' + err);
        });
    console.log(response);

    // заглушка:
    return [
        {
            id: 1,
            author: 'Oleg',
            content: 'some content',
            timestamp: '1712839649618',
        },
        {
            id: 2,
            author: 'Oleg',
            content: 'some other content',
            timestamp: '1712839649640',
        }
    ];
}
export async function addPostsByUserId(userId, post){
    const response = await fetch(`${catalogURL}/messages/message`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({author: userId, content: post}),
    })
    .then(res => res.json())
    .catch(err => {
        console.log('Error with adding new post from server API: ' + err);
    });
    console.log(response); // 782aecca-26dc-4c3c-a8a8-74bbf621f8dd

    // заглушка:
    return new Date().toISOString();
}
export async function removePostByUserId(postId){
    const response = await fetch(
        `${catalogURL}/messages/message/${postId}`,
        {method: "DELETE"})
        .then(res => res.json())
        .catch(err => {
            console.log('Error with updating post from server API: ' + err);
        });
    console.log(response); // 1 (num od deleted posts

    return 1;
}






/*
export async function getProducersPostsByUserId(id){
    const response = await fetch(`${catalogURL}/${id}`)
        .then(res => res.json())
        .catch(err => {
            console.log('Error with getting producers posts from server API: ' + err);
        });
    console.log(response);
    return [
        {
            id: 33,
            date: '01.01.2024',
            text: 'some content'
        },
        {
            id: 23,
            date: '02.02.2024',
            text: 'some other content'
        }
    ];
}


export async function updatePostByUserId(userId, postId, post){
    const response = await fetch(`${catalogURL}/${userId}/${postId}`, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({post}),
    })
        .then(res => res.json())
        .catch(err => {
            console.log('Error with updating post from server API: ' + err);
        });
    console.log(response);

    return {id: new Date().toISOString()}
}
*/
