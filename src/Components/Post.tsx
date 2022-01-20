import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Box, Image, Button, Columns } from 'react-bulma-components';


function Post(props: any) {
    const [liked, setLike] = useState("Like")
    const [color, setColor] = useState("success")

    const handleLike = () => {
        if (liked === "Like") {
            setLike("Liked")
            setColor("")
        } else {
            setLike("Like")
            setColor("success")
        }
    }
    return (
        <Columns.Column size="one-third" id="post" >
            <Box id="post">
                <Columns>
                    <Image src={props.imgURL} style={{ paddingBottom: 5, paddingLeft: 8, paddingRight: 8, paddingTop: 8 }} fallback="https://i.imgur.com/FAsGf18.png" />
                    <Columns.Column>
                        <p><b>{props.title}</b></p><p>{props.date}</p><Button style={{ marginTop: "10px" }} onClick={() => handleLike()} color={color} renderAs="span">{liked}</Button>
                    </Columns.Column>
                </Columns>
            </Box>
        </Columns.Column >
    );
}

export default Post;
