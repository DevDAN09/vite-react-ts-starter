import {
    HeaderBlock,
    HeaderContent,
    SubMenuBlock,
    SubMenuContent
} from "./Header.style"
import Menu from "@/components/Menu/Menu"
import { useState } from "react"

// 서브메뉴 데이터 정의
const subMenus = {
    menu1: ["서브메뉴1-1", "서브메뉴1-2", "서브메뉴1-3"],
    menu2: ["서브메뉴2-1", "서브메뉴2-2"],
    menu3: ["서브메뉴3-1", "서브메뉴3-2", "서브메뉴3-3"]
};

const Header: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleMenuSelect = (menuName: string) => {
        setActiveMenu(menuName);
    };

    return (
        <>
            <HeaderBlock>
                <HeaderContent>
                    <p>logo</p>
                    <Menu onMenuSelect={handleMenuSelect}/>
                </HeaderContent>
                {activeMenu && (
                    <SubMenuBlock>
                        <SubMenuContent>
                        {subMenus[activeMenu as keyof typeof subMenus].map((subItem, index) => (
                                <div key={index}>{subItem}</div>
                            ))}
                        </SubMenuContent>
                    </SubMenuBlock>
                )}
            </HeaderBlock>
        </>
    )
}

export default Header;