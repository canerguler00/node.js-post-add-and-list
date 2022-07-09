let posts = [
    { title: "post1", author: "blog1" },
    { title: "post2", author: "blog2" },
    { title: "post3", author: "blog3" }
];

function addPosts(newPost){
    return new Promise((resolve,reject)=>{
        console.log("Yeni Post Ekleniyor..")
        if(newPost){
            posts.push(newPost)
            resolve("Yeni Post Eklendi.")
        }else{
            reject("Yeni Post Eklerken Hata Oluştu.")
        }
    })
}

function listPosts(data){
    return new Promise((resolve,reject)=>{
        console.log("Postlar Bekleniyor..")
        if(data){
            console.log("Postlar Listelendi.")
            resolve(posts)
        }else{
            reject("Postlar Listelenirken Hata Oluştu.")
        }
    })
}

async function processPost(){
    try {
        
        console.log(await listPosts(true))
        console.log("*******************************")

        const addedPost = await addPosts(newPost)
        console.log(addedPost)
        
        console.log(await listPosts(true))
        console.log("*******************************")

    } catch (error) {
        console.log(error)
    }
}

let newPost = { title: "post4", author: "blog4" }
processPost()