import {
    HeaderBlock,
    HeaderContent,
    SubMenuBlock,
    SubMenuContent,
    HamburgerButton,
    SlideMenuBlock,
    SlideMenuContent
} from "./Header.style"
import Menu from "@/components/Menu/Menu"
import { useState, useEffect } from "react"

// 서브메뉴 데이터 정의
const subMenus = {
    menu1: ["서브메뉴1-1", "서브메뉴1-2", "서브메뉴1-3"],
    menu2: ["서브메뉴2-1", "서브메뉴2-2"],
    menu3: ["서브메뉴3-1", "서브메뉴3-2", "서브메뉴3-3"]
};

const SlideMenu: React.FC<{toggleSlideMenu: boolean}> = ({toggleSlideMenu}) => {

    return (
        toggleSlideMenu && (
            <SlideMenuBlock>
                <SlideMenuContent>
                    <div>SlideMenu</div>
                    <div>SlideMenu</div>
                </SlideMenuContent>
            </SlideMenuBlock>
        )
    )
}

const Header: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
    const [isSlideOpen, setIsSlideOpen] = useState<string | null>(null);
    const [toggleSlideMenu, setToggleSlideMenu] = useState<boolean>(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const headerElement = document.getElementById('header-area');
            const subMenuElement = document.getElementById('submenu-area');
            
            if (headerElement && subMenuElement) {
                if (!headerElement.contains(event.target as Node) && 
                    !subMenuElement.contains(event.target as Node)) {
                    setActiveMenu(null);
                }
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        if(innerWidth < 768){
            setActiveMenu(null);
        }
        if(innerWidth > 768){
            setToggleSlideMenu(false);
        }
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [innerWidth]);

    useEffect(() => {
        if (toggleSlideMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [toggleSlideMenu]);

    const handleMenuSelect = (menuName: string) => {
        setActiveMenu(menuName);
    };

    const toggleMenu = () => {
        setToggleSlideMenu(!toggleSlideMenu);
    };

    return (
        <>
            <HeaderBlock id="header-area">
                <HeaderContent>
                    <p>logo</p>
                    {innerWidth > 768 && <Menu onMenuSelect={handleMenuSelect}/>}
                    {innerWidth < 768 && <HamburgerButton onClick={() => toggleMenu()}>
                        {toggleSlideMenu ? "✕": "☰"}
                    </HamburgerButton>}
                </HeaderContent>
                {activeMenu && (
                    <SubMenuBlock id="submenu-area">
                        <SubMenuContent>
                            {subMenus[activeMenu as keyof typeof subMenus].map((subItem, index) => (
                                <div key={index}>{subItem}</div>
                            ))}
                        </SubMenuContent>
                    </SubMenuBlock>
                )}
                {toggleSlideMenu && <SlideMenu toggleSlideMenu={toggleSlideMenu}/>}
            </HeaderBlock>
        </>
    )
}

export default Header;