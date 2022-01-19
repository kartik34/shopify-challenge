import React, { useState } from 'react';
import './Post.css';
import 'bulma/css/bulma.min.css';
import { Box, Image, Button, Columns } from 'react-bulma-components';


function Post(props: any) {
    const [active, setActive] = useState(false)
    return (
        <Columns.Column size="one-third" id="post" >
            <Box id="post" >
                <Image src={props.imgURL} style={{ paddingBottom: "10px" }} fallback="https://i.imgur.com/FAsGf18.png" />
                <p><b>{props.title}</b></p><p>{props.date}</p><Button color="success" renderAs="span">Like</Button>
            </Box>
        </Columns.Column>
    );
}

export default Post;
