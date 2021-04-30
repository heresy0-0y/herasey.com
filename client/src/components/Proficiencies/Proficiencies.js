import React from "react"
import { IconContext } from "react-icons/lib"
import {IconsContainer, AboutMe, NodemonIcon, NodeJsIcon, NetlifyIcon, HerokuIcon, JsIcon, StyledComponentsIcon, GitIcon, CssIcon, RailsIcon, RubyIcon, ReactIcon} from './Proficiencies.elements'

function Proficiencies() {
   
    return (
        <>
        <AboutMe>
            hiya ! welcome to this virtual window to my work and play as a developer and citizen of the web;
        </AboutMe>
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
