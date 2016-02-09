import React from "react";
import { Link,IndexLink } from "react-router";

class Nav extends React.Component{
	render(){
		return(
			<ul className="nav">
				{/*默认一开始被点击*/}
				<li className="nav_title">功能</li>	
				<li><IndexLink to="/" activeClassName={ "active" }>相亲活动</IndexLink></li>
				<li><Link to="/Material" activeClassName={ "active" }>素材库</Link></li>
				<li><Link to="/Activity_management" activeClassName={ "active" }>相亲活动管理</Link></li>

				<li className="nav_title">统计</li>
				<li><Link to="/Page_analysis" activeClassName={ "active" }>主页分析</Link></li>
				<li><Link to="/Activity_analysis" activeClassName={ "active" }>活动分析</Link></li>

				<li className="nav_title">设置</li>
				<li><Link to="/Edit_profile" activeClassName={ "active" }>修改资料</Link></li>
				<li><Link to="/Change_password" activeClassName={ "active" }>修改密码</Link></li>
				<li><Link to="/Feedback" activeClassName={ "active" }>意见反馈</Link></li>
				<li><Link to="/About_turelove" activeClassName={ "active" }>关于“初恋”</Link></li>
			</ul>
		);
	};
};

export default Nav;