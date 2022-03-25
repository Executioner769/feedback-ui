import React from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList({ feedbacks, handleDelete }) {
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
                        <FeedbackItem
                            key={feedback.id}
                            feedback={feedback}
                            handleDelete={handleDelete}
                        />
                    </motion.div>
                ))}
                ;
            </AnimatePresence>
        </>
    );
}

export default FeedbackList;
