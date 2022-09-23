import React, {useEffect, useState} from 'react';

function Footer() {
    const [posts, setPosts] = useState([]);
    function getPost(){
        const fetchedPosts = JSON.parse(localStorage.getItem('posts'));
        setPosts(fetchedPosts);
        return posts;
        
    }
    useEffect(()=>{
        getPost()
    }, [])

    return (
        <footer className="">
            <div class="footer-inner u-flex u-col-3">
                <div>
                    <h4>Kontaktuppgifter</h4>
                    <p>Norra Vallgatan 6</p>
                    <p>211 25 Malmö</p>
                    <a href="mailto:hej@rebeccalofgren.se">hej@rebeccalofgren.se</a>
                </div>
                <div>
                    <h4>Artiklar</h4>
                    <ul>
                        {posts?.slice(0,3).map((post)=>{return (<li><a href={post.Länk}>{post.Titel}</a></li>)})}
                    </ul>
                </div>
                <div>
                    <h4>Följ mig!!</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer