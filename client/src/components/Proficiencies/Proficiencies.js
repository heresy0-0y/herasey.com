import React, { useState, useEffect } from "react"
import { IconContext } from "react-icons/lib"
import {IconsContainer, NodemonIcon, NodeJsIcon, NetlifyIcon, HerokuIcon, JsIcon, StyledComponentsIcon, GitIcon, CssIcon, RailsIcon, RubyIcon, ReactIcon} from './Proficiencies.elements'

function Proficiencies() {
   
    return (
        <>
        <IconContext.Provider value={{ color: "#ffefd5" }}>
        <IconsContainer>
            <GitIcon/>
            <ReactIcon/>
            <NodeJsIcon/>
            <JsIcon/>
            <CssIcon/>
            <StyledComponentsIcon/>
            <HerokuIcon/>
            <RailsIcon/>
            <RubyIcon/>
            <NetlifyIcon/>
            <NodemonIcon/>
        </IconsContainer>
        </IconContext.Provider>
        </>
    )
}

export default Proficiencies;
