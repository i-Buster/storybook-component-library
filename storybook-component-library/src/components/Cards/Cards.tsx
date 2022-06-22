/** @jsx h */
import { h } from 'preact';
import './cards.css';
export interface CardsProps {
    id: number;
    carouselURL: string;
    hotelName: string;
    pricePerPerson: number;
    hotelRating: number;
    hotelDescription: string;
}

export const CardComponent = ({
    id,
    carouselURL,
    hotelName,
    pricePerPerson,
    hotelRating,
    hotelDescription,
}: CardsProps) => {


    return (
        <div className="card-container">
            <img id={`hotel_image_${id}`} src={carouselURL}
                alt="card preview" />
            <div className="card-body">
                <h1>{hotelName}</h1>
                <p className="price">£{pricePerPerson}*</p>
                <label id="rating_label" className="ratings-text">Rating</label>
                <p>{hotelRating}</p>
                <p>{hotelDescription}</p>
            </div>
        </div>
    );
};

