import React from 'react';
import './Post.css';
import 'bulma/css/bulma.min.css';
import { Box, Tag, Image } from 'react-bulma-components';

function Post(props: any) {
    const article = props.article;
    return (
        <Box id="post" key={post.rating} >
            <Image src={post.url} />
            <p>{post.title}</p><p>{post.date}</p>
        </Box>
    );
}

export default Post;
