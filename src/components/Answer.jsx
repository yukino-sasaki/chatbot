import React from 'react';
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(() =>
    createStyles({

        "button": {
            borderColor: "#FFB549",
            color: "#FFB549",
            marginBottom: '8px',
            fontWeight: 600,
            width: "100%",
            "&:hover": {
                backgroundColor: '#FFB549',
                color: "#fff"

            }
        }
    })
);
const Answer = (props) => {
    const classes = useStyles()
    console.log(makeStyles)

    return (
        <div>
            <Button variant="outlined"

                className={classes.button}
                onClick={() => {
                    props.select(props.answer.content, props.answer.nextId)
                }}>
                {props.answer.content}
            </Button>
        </div>
    )
}

export default Answer