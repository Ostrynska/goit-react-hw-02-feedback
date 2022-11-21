import React from 'react'
import PropTypes from 'prop-types';
import { Notifications } from "./Notification.styled";
import { IconContext } from "react-icons";
import { RiEmotionSadLine } from "react-icons/ri";

const Notification = (({ message }) =>
{
    return (
        <Notifications>{message}
            <IconContext.Provider value={{ color: "#D85841", size: '28px'}}>
                <RiEmotionSadLine />
            </IconContext.Provider>
        </Notifications>   
    )
});

Notification.propTypes = {
    message: PropTypes.string.isRequired
}

export default Notification