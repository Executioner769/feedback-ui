import { MdStar } from "react-icons/md";

function FeedbackCard({ item, handleDelete }) {
    const { id, rating, review } = item;

    return (
        <div className="feedback-item">
            <div className="tag is-info is-rounded has-text is-size-5 rating">
                {rating}
                <MdStar color="gold" />
            </div>
            <div className="notification is-info is-light has-text is-size-6 review">
                <button
                    onClick={() => handleDelete(id)}
                    className="delete"
                ></button>
                {review}
            </div>
        </div>
    );
}

export default FeedbackCard;
