import {
    ScrollPageStyle,
    TestBox
} from "./ScrollPage.style"
import { useEffect, useState, useRef } from 'react';

const ScrollPage: React.FC = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const checkBoxVisibility = () => {
        if (boxRef.current) {
            const rect = boxRef.current.getBoundingClientRect();
            console.log(rect);
            setIsBoxVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkBoxVisibility);

        return () => {
            window.removeEventListener('scroll', checkBoxVisibility);
        };
    }, []);

    return (
        <ScrollPageStyle style={{ height: '200vh' }}>
            <div
                ref = {boxRef}
                style = {{
                    width: '100px',
                    height: '100px',
                    backgroundColor: isBoxVisible ? 'red' : 'blue',
                }}
            >
                {isBoxVisible ? 'Box is visible' : 'Box is hidden'}
            </div>
            <TestBox>
            </TestBox>
        </ScrollPageStyle>
    )
}

export default ScrollPage;