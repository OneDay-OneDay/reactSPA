import React from "react";
import ReactDOM from "react-dom";
import { Router,Route,Link,browserHistory,IndexRoute,IndexLink } from "react-router";

import Header from "./app_component/header.jsx";
import Nav from "./app_component/nav.jsx";

import Activity from "./activity/activity.jsx";
import Material from "./activity/material.jsx";
import Activity_management from "./activity/activity_management.jsx";

import Page_analysis from "./statistics/Page_analysis.jsx";
import Activity_analysis from "./statistics/activity_analysis.jsx";

import Edit_profile from "./setting/edit_profile.jsx";
import Change_password from "./setting/change_password.jsx";
import Feedback from "./setting/feedback.jsx";
import About_turelove from "./setting/about_turelove.jsx";

import "../css/style.css";

class App extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<div className="content">
					<Nav />
					<div className="content_main">
						{ this.props.children }
					</div>
				</div>
			</div>
		);
	}
};

ReactDOM.render((
		<Router history={ browserHistory }>
			<Route path="/" component={ App }>
				{/*默认一开始就出现*/}
				<IndexRoute  component={ Activity }/>
				<Route path="/Material" component={ Material } />
				<Route path="/Activity_management" component={ Activity_management } />

				<Route path="/Page_analysis" component={ Page_analysis } />
				<Route path="/Activity_analysis" component={ Activity_analysis } />


				<Route path="/Edit_profile" component={ Edit_profile } />
				<Route path="/Change_password" component={ Change_password } />
				<Route path="/Feedback" component={ Feedback } />
				<Route path="/About_turelove" component={ About_turelove } />
			</Route>
		</Router>
	),document.getElementById("app"));