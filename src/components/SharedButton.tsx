import React from 'react';
import { Button } from "@mui/material";

type SharedButtonPropsType = {
   text: string
}
const SharedButton = ({text='default text'}: SharedButtonPropsType) => (
   <Button variant="text" sx={{backgroundColor:'#F9F4D9'}} color="primary">{text}</Button>
)

export default SharedButton;