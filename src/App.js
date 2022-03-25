import "./App.css";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { useState } from "react";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const handleDelete = (id) => {
        setFeedback(feedback.filter((feedback) => feedback.id !== id));
    };

    const addFeedback = (newFeedback) => {
        setFeedback([{ id: nanoid(), ...newFeedback }, ...feedback]);
    };

    return (
        <>
            <div className="App container is-fluid">
                <Header title="Feedback UI" />
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedbacks={feedback} />
                <FeedbackList
                    feedbacks={feedback}
                    handleDelete={handleDelete}
                />
            </div>
        </>
    );
}

export default App;
