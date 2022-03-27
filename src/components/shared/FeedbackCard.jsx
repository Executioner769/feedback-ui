import { MdStar } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

function FeedbackCard({ item, handleDelete, handleEdit }) {
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
                <button
                    onClick={() => handleEdit(item)}
                    className="edit"
                    style={{ padding: "3px 9px 1px 3px" }}
                >
                    <FiEdit2 color="white" />
                </button>
                {review}
            </div>
        </div>
    );
}

export default FeedbackCard;
