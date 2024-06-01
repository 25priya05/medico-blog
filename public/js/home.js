import { db } from './firebase.js';  // Import the db object from firebase.js
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const blogSection = document.querySelector('.blogs-section');

// Function to fetch and display all blogs except the current one
const loadBlogs = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        querySnapshot.forEach(blog => {
            if (blog.id !== decodeURI(location.pathname.split("/").pop())) {
                createBlog(blog);
            }
        });
    } catch (error) {
        console.error("Error loading blogs: ", error);
    }
}

// Function to create a blog card
const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
    </div>
    `;
}

// Load blogs on page load
loadBlogs();
