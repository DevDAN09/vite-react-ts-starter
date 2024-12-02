import {
    MenuBlock,
    MenuList
} from "./Menu.style"
import { useState } from "react";

const MenuItem:React.FC<{
    name:string;
    isActive:boolean;
    onClick:() => void;
}> = ({name, isActive, onClick}) => {
    return (
        <li 
            onClick={onClick}
            style={{
                color: isActive ? "red" : "black"
            }}
        >
            {name}
        </li>
    )
}

const Menu: React.FC<{
    onMenuSelect?: (menuName: string) => void;
}> = ({ onMenuSelect }) => {
    
    const menuItems = ["menu1", "menu2", "menu3"];
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const handleMenuClick = (item: string) => {
        setActiveItem(item);
        onMenuSelect?.(item);
    };

    return (
        <MenuBlock>
            <MenuList>
                {menuItems.map((item, index) => (
                    <MenuItem 
                    key={index} 
                    name={item} 
                    isActive={activeItem === item} 
                    onClick={() => handleMenuClick(item)} />
                ))}
            </MenuList>
        </MenuBlock>
    )
}

export default Menu;