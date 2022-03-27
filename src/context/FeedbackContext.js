import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
import { nanoid } from "nanoid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        isEditable: false,
    });

    const handleDelete = (id) => {
        setFeedback(feedback.filter((feedback) => feedback.id !== id));
    };

    const addFeedback = (newFeedback) => {
        setFeedback([{ id: nanoid(), ...newFeedback }, ...feedback]);
    };

    const handleEdit = (item) => {
        setFeedbackEdit({
            item,
            isEditable: true,
        });
    };

    const updateFeedback = (id, updatedFeedback) => {
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...updatedFeedback } : item
            )
        );
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedbacks: feedback,
                feedbackEdit,
                handleDelete: handleDelete,
                addFeedback: addFeedback,
                handleEdit,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
