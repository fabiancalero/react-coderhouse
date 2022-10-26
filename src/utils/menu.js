import React from "react";
import {
	ChairOutlined,
	DesktopMacOutlined,
	KeyboardOutlined,
	MemoryOutlined,
	MouseOutlined,
	SmartToyOutlined,
} from "@mui/icons-material";

export const menuItems = [
	{ id:'monitores', name:"Monitores", icon: <DesktopMacOutlined/> },
	{ id:'mouses', name:"Mouses", icon: <MouseOutlined/> },
	{ id:'teclados', name:"Teclados", icon: <KeyboardOutlined/> },
	{ id:'cpu', name:"CPU", icon: <MemoryOutlined/> },
	{ id:'gpu', name:"GPU", icon: <SmartToyOutlined/> },
	{ id:'sillas-gamer', name:"Sillas gamer", icon: <ChairOutlined/> },
];
