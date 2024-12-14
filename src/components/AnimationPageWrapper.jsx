import React from "react";
import { motion } from "motion/react";
/**
 *This Components is a wrapper for the animations
 * @param {*} param0 children are supposed to be other components
 * @returns Animation wrapper for the routes
 */
export default function AnimationPageWrapper({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: "-100%" }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: "100%" }}
			transition={{ durations: 1.5, ease: "easeInOut" }}
		>
			{children}
		</motion.div>
	);
}
