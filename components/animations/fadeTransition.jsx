import { motion } from "framer-motion"

export const FadeTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{
                opacity: 0,
                transition: { delay: .3, duration: 1 }
            }}
        >
            {children}
        </motion.div>
    )
}