import { AnimatePresence, motion } from 'framer-motion'
import Portal from './Portal'

export default function Modal({ visible, onClose, children, }) {
    return (
        <Portal>
            <AnimatePresence>
                {visible && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed md:py-24 z-50 inset-0 overflow-auto bg-black bg-opacity-90 p-6" onClick={() => onClose()}>
                        <motion.div
                            initial={{ translateY: '-20%' }}
                            animate={{ translateY: '0%' }}
                            exit={{ translateY: '-20%' }}
                            className={'max-w-lg w-full mx-auto bg-zinc-900 shadow-2xl'}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {children}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Portal>
    )
}
