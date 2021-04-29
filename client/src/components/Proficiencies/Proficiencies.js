import React from "react"
import { IconContext } from "react-icons/lib"
import {IconsContainer, NodemonIcon, NodeJsIcon, NetlifyIcon, HerokuIcon, JsIcon, StyledComponentsIcon, GitIcon, CssIcon, RailsIcon, RubyIcon, ReactIcon} from './Proficiencies.elements'

function Proficiencies() {
   
    return (
        <>
        <IconsContainer>
        <IconContext.Provider value={{ color: "#bbdbb4" }}>
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
        </IconContext.Provider>
        </IconsContainer>
        </>
    )
}

export default Proficiencies;
