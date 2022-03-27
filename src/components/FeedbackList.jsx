import React from "react";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
    const { feedbacks } = useContext(FeedbackContext);

    if (feedbacks.length === 0) {
        return (
            <>
                <br />
                <div className="notification is-danger">
                    <div className="has-text-centered">No feedbacks yet.</div>
                </div>
            </>
        );
    }
    return (
        <>
            <AnimatePresence>
                {feedbacks.map((feedback) => (
                    <motion.div
                        key={feedback.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={feedback.id} feedback={feedback} />
                    </motion.div>
                ))}
                ;
            </AnimatePresence>
        </>
    );
}

export default FeedbackList;
