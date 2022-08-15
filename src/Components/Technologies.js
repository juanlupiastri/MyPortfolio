import * as React from 'react';
import Card from '@mui/material/Card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Tooltip from '@mui/material/Tooltip';
import reactIcon from "../icons/react.png"
import angularIcon from "../icons/angular.png"
import asp from "../icons/aspnet.png"
import cs from "../icons/cs.png"
import css from "../icons/css.png"
import html from "../icons/html.png"
import java from "../icons/java-logo-1.png"
import js from "../icons/js.png"
import netbeans from "../icons/netbeans.png"
import python from "../icons/python.png"
import typescript from "../icons/Typescript.png"
import visual2017 from "../icons/visual2017.png"
import vscode from "../icons/vscode.png"
import jupyter from "../icons/Jupyter.png"
import jquery from "../icons/jquery.png"
import trello from "../icons/trello.png"
import jira from "../icons/Jira.png"
import git from "../icons/git.png"
import tfs from "../icons/tfs.png"
import trelloGrande from "../icons/trelloGrande.png"
import pixlr from "../icons/pixlr.png"
import canva from "../icons/canva.png"
import androidStudio from "../icons/android.png"
import blueStacks from "../icons/bluestacks.png"
import sass from "../icons/sass.png"
import home from "../icons/home.png"
import r from "../icons/r.png"
import azure from "../icons/azure.png"
import firebase from "../icons/firebase.png"
import { Zoom } from '@mui/material';

const Technologies = () => {

    return (
        <div className='topicInfo'>
            <h2 className='techTitle'>Languages</h2>
            <ImageList sx={{ width: 600, height: 600 }} className="imgList">
            <ImageListItem>
                    <Tooltip title="JavaScript " arrow TransitionComponent={Zoom}>
                        <img
                            src={js}
                            alt="JavaScript "
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title="HTML "arrow TransitionComponent={Zoom}>
                        <img
                            src={html}
                            alt="HTML "
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem >
                    <Tooltip title="CSS "arrow TransitionComponent={Zoom}>
                        <img
                            src={css}
                            alt="CSS "
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title="Typescript "arrow TransitionComponent={Zoom}>
                        <img
                            src={typescript}
                            alt="Typescript "
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem >
                    <Tooltip title="C# "arrow TransitionComponent={Zoom}>
                        <img
                            src={cs}
                            alt="C# "
                        />
                    </Tooltip>
                </ImageListItem>

                <ImageListItem >
                    <Tooltip title="SASS "arrow TransitionComponent={Zoom}>
                        <img
                            src={sass}
                            alt="SASS "
                        />
                    </Tooltip>
                </ImageListItem>

                <ImageListItem >
                    <Tooltip title="Python "arrow TransitionComponent={Zoom}>
                        <img
                            src={python}
                            alt="Python"
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title="Java "arrow TransitionComponent={Zoom}>
                        <img
                            src={java}
                            alt="Java "
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title="R "arrow TransitionComponent={Zoom}>
                        <img
                            src={r}
                            alt="R "
                        />
                    </Tooltip>
                </ImageListItem>
            </ImageList>

            <h2 className='techTitle'>DB</h2>
            <ImageList sx={{ width: 600, height: 600 }}   className="imgList">
                <ImageListItem >
                    <Tooltip title="Microsoft Azure "arrow TransitionComponent={Zoom}>
                        <img
                            src={azure}
                            alt="Microsoft Azure"
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title="Google Firebase"arrow TransitionComponent={Zoom}>
                        <img
                            src={firebase}
                            alt="firebase"
                        />
                    </Tooltip>
                </ImageListItem>
            </ImageList>

            <h2 className='techTitle'>Frameworks / Libraries</h2>
            <ImageList sx={{ width: 600, height: 600 }}   className="imgList">
                <ImageListItem >
                    <Tooltip title="React "arrow TransitionComponent={Zoom}>
                        <img
                            src={reactIcon}
                            alt="React icon"
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title="Angular "arrow TransitionComponent={Zoom}>

                        <img
                            src={angularIcon}
                            alt="Angular "
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title="JQuery"arrow TransitionComponent={Zoom}>
                        <img
                            src={jquery}
                            alt=" JQuery"
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title=".NET Framework"arrow TransitionComponent={Zoom}>
                        <img
                            src={asp}
                            alt="ASP.NET "
                        />
                    </Tooltip>
                </ImageListItem>
            </ImageList>

            <h2 className='techTitle'>IDE</h2>
            <ImageList sx={{ width: 600, height: 600 }}   className="imgList">
                <ImageListItem>
                    <Tooltip title="Visual Studio Code 2019 "arrow TransitionComponent={Zoom}>
                        <img
                            src={vscode}
                            alt="Visual Studio Code 2019 "
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title="Visual Studio 2017 "arrow TransitionComponent={Zoom}>
                        <img
                            src={visual2017}
                            alt="Visual Studio 2017 "
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title="Jupyter Notebook "arrow TransitionComponent={Zoom}>
                        <img
                            src={jupyter}
                            alt="Jupyter Notebook "
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title="Android Studio"arrow TransitionComponent={Zoom}>
                        <img
                            src={androidStudio}
                            alt="Android "
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title="NetBeans "arrow TransitionComponent={Zoom}>
                        <img
                            src={netbeans}
                            alt="NetBeans "
                        />
                    </Tooltip>
                </ImageListItem>
            </ImageList>

            <h2 className='techTitle'>Project Management</h2>
            <ImageList sx={{ width: 600, height: 600 }}   className="imgList">
                {/* <ImageListItem>
                <Tooltip title="Trello ">
                        <img
                            src={trello}
                            alt="Trello "
                        />
                    </Tooltip>
                </ImageListItem> */}
                <ImageListItem>
                    <Tooltip title="Git"arrow TransitionComponent={Zoom}>
                        <img
                            src={git}
                            alt="Git "
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                <Tooltip title="Trello "arrow TransitionComponent={Zoom}>
                        <img
                            src={trelloGrande}
                            alt="Trello "
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title="Jira"arrow TransitionComponent={Zoom}>
                        <img
                            src={jira}
                            alt="jira"
                        />
                    </Tooltip>
                </ImageListItem>

                <ImageListItem>
                    <Tooltip title="TFS"arrow TransitionComponent={Zoom}>
                        <img
                            src={tfs}
                            alt="tfs"
                        />
                    </Tooltip>
                </ImageListItem>
            </ImageList>

            <h2 className='techTitle'>Design</h2>
            <ImageList sx={{ width: 600, height: 600 }}   className="imgList">
            <ImageListItem>
                    <Tooltip title="Canva "arrow TransitionComponent={Zoom}>
                        <img
                            src={canva}
                            alt="Canva"
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title="HomeByMe 3D design"arrow TransitionComponent={Zoom}>
                        <img
                            src={home}
                            alt="HomeByMe"
                        />
                    </Tooltip>
                </ImageListItem>
                <ImageListItem>
                    <Tooltip title="Pixlr"arrow TransitionComponent={Zoom}>
                        <img
                            src={pixlr}
                            alt="Pixlr"
                        />
                    </Tooltip>
                </ImageListItem>
            </ImageList>

            <h2 className='techTitle'>Others</h2>
            <ImageList sx={{ width: 600, height: 600 }}   className="imgList">
            <ImageListItem>
                    <Tooltip title="BlueStacks 5"arrow TransitionComponent={Zoom}>
                        <img
                            src={blueStacks}
                            alt="Canva"
                        />
                    </Tooltip>
                </ImageListItem>
            </ImageList>
        </div >
    );
};

export default Technologies; 