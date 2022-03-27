import "./App.css";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { useState } from "react";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
            <FeedbackProvider>
                <Header title="Feedback UI" />
                <div className="App container is-fluid">
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                </div>
                <Footer />
            </FeedbackProvider>
        </>
    );
}

export default App;
