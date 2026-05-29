import React from "react";
import {Intro, Edu} from "./intro";
import Pub from "./pub";
import Exp from "./exp";
import Awd from "./award";
import Pro from "./pro";
import { ASCII } from "./tool";
import {Path, Code, Contact} from "./tool";
import "./styles/fa-all.css";
import "./styles/main.css";

const paths = ['~\\Home', '~\\Project', '~\\Publication', '~\\Experience', '~\\Award', '~\\Project'];

function IntroContent(p) {
	return (
		<div id='app'> 
			<ASCII />
			<Path path={paths[p.index-1]}/>
			<Code command='About Me'/>
			<Intro />
			<Path path={paths[p.index-1]}/>
			<Code command='Education'/>
			<Edu />
			<Path path={paths[p.index-1]}/>
			<Code command='Contact Information'/>
			<Contact />
		</div>
	);
}

function ProContent(p) {
	return (
		<div id='app'> 
			<ASCII />
			<Path path={paths[p.index-1]}/>
			<Code command='Project'/>
			<Pro />
			<Path path={paths[p.index-1]}/>
			<Code command='Contact Information'/>
			<Contact />
		</div>
	);
}

function PubContent(p) {
	return (
		<div id='app'> 
			<ASCII />
			<Path path={paths[p.index-1]}/>
			<Code command='Publication list'/>
			<Pub />
			<Path path={paths[p.index-1]}/>
			<Code command='Contact Information'/>
			<Contact />
		</div>
	);
}

function ExpContent(p) {
	return (
		<div id='app'> 
			<ASCII />
			<Path path={paths[p.index-1]}/>
			<Code command='Experience'/>
			<Exp />
			<Path path={paths[p.index-1]}/>
			<Code command='Contact Information'/>
			<Contact />
		</div>
	);
}

function AwdContent(p) {
	return (
		<div id='app'> 
			<ASCII />
			<Path path={paths[p.index-1]}/>
			<Code command='Honors'/>
			<Awd />
			<Path path={paths[p.index-1]}/>
			<Code command='Contact Information'/>
			<Contact />
		</div>
	);
}

function App(props) {
	if (props.index === 1) {
	  return <IntroContent  index={props.index}/>;
	}
	else if (props.index === 2) {
		return <ProContent index={props.index}/>;
	}
	else if (props.index === 3) {
		return <PubContent index={props.index}/>;
	}
	else if (props.index === 4) {
		return <ExpContent  index={props.index}/>;
	}
	else if (props.index === 5) {
		return <AwdContent  index={props.index}/>;
	}
	// TODO : Project
	else if (props.index === 6) {
		return <IntroContent  index={props.index}/>;
	}	
}

export default App;