import "./App.css";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";
import Footer from "./components/Footer";

function App() {
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
