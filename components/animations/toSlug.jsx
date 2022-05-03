import { motion } from 'framer-motion'
// import { MotionOverlay, Panel } from '../../styles/common.style';
import styled from 'styled-components';

// Set the grid-template-columns to repeat the same amount of panels in 
// '/components/animations/toDetailsTransition', 1fr will make them even
export const MotionOverlay = styled.div`
    position: fixed;
    top: 0;
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    z-index: 99;
`;

export const Panel = styled.div`
    height: 100vh;
    /* background-color: ${props => props.theme.red}; */
    background-color: #E6E6E3;
`;

// How many panels we want
const articles = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
]

export const ToSlug = () => {
    return (
        <MotionOverlay>
            {articles.map((article, i) => (
                <Panel
                    as={motion.li}
                    key={article.id}
                    initial={{ y: i % 2 === 0 ? "-100vh" : "100vh" }}
                    animate={{
                        y: 0, transition: {
                            duration: .5,
                            ease: [0.5, .11, 0.45, 0.15]
                        }
                    }}
                // animate={{ translateY: 0 }}
                // transition={{
                //     duration: 0.5,
                //     // delay: i * 0.1,
                //     ease: [0.5, .11, 0.45, 0.15]
                // }}
                />
            ))}
        </MotionOverlay>
    )
}