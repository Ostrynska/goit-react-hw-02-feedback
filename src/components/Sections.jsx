import React from 'react'

export const Sections = ({ title,  children}) =>
{
    return (
        <>
        <div>
            <h3>{title}</h3>
            {children}
            </div>
        </>
    )
};