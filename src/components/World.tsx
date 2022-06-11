import Portal from "./Portal";
import { motion } from 'framer-motion'

export default function World({ visible, onClose }) {
    return <Portal>
        <motion.div
            animate={{ rotate: ['0', '360deg'] }}
            transition={{ loop: Infinity, duration: 60 }}
            className="fixed top-0 inset-0 flex items-center justify-center">
            <img className="w-1/2 opacity-20" src="/img/world.png" alt="" />
        </motion.div>
    </Portal>
}