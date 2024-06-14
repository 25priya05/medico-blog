import { db } from '../firebase.js';
import { doc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let blogId = decodeURI(location.pathname.split("/").pop());
const banner = document.querySelector('.banner');
const titleField = document.querySelector('.title');
const publishedField = document.querySelector('.published');
const articleField = document.querySelector('.article');

const getBlogData = async (blogId) => {
    const docRef = doc(db, "blogs", blogId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        banner.style.backgroundImage = `url(${data.bannerImage})`;
        titleField.textContent = data.title;
        document.title = data.title;
        publishedField.innerHTML += data.publishedAt;
        articleField.innerHTML = formatArticle(data.article);
    } else {
        console.log("No such document!");
    }
};

const formatArticle = (article) => {
    return article.split("\n").filter(item => item.length).map(item => {
        if (item[0] === '#') {
            let hCount = item.split(' ')[0].length;
            return `<h${hCount}>${item.slice(hCount).trim()}</h${hCount}>`;
        } else if (item.startsWith('![')) {
            let [alt, src] = item.match(/!\[(.*?)\]\((.*?)\)/).slice(1, 3);
            return `<img src="${src}" alt="${alt}" class="article-image">`;
        } else {
            return `<p>${item}</p>`;
        }
    }).join('');
};

if (blogId) {
    getBlogData(blogId);
} else {
    console.log("No blog ID found in the URL");
}

const blogSection = document.querySelector('.blogs-section');

const loadBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    querySnapshot.forEach(blog => {
        if (blog.id !== blogId) {
            createBlog(blog);
        }
    });
};

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
    </div>`;
};

loadBlogs();
