// It is a separate page for spacifing the User Interface of our flashcard

import React from "react";
import { useNavigate } from "react-router-dom";
import DemoImg from "../../assets/gray.jpg";

const MySingleFlashCard = ({ flashcard }) => {
    const navigate = useNavigate();

    return (
        <div
            // Different id for all flashcards
            kay={flashcard.groupid}
            className="p-4 m-6 mx auto flex flex-col space-y-3 items-center justify-center bg-white rounded-md text-black w-[23rem] h-[13rem] relative border-2 border-slate-200"
        >
            <div className="absolute -top-9">
                {/* this will cheack if there is upload the grouping used this image in flashcard other wise used demoimage */}
                {flashcard.groupimg ? (
                    <img
                        className="rounded-full w-16 h-16 object-cover aspect-square"
                        src={flashcard.groupimg}
                        alt={flashcard.groupimg} />
                ) : (<img
                    className="rounded-full w-16 h-16 object-cover aspect-square"
                    src={DemoImg}
                    alt={flashcard.groupimg} />

                )}
            </div>
            <h2 className="font-bold text-lg">{flashcard.groupname}</h2>
            <p className="text-center font-mediun text-sm text-slate-600 line-clamp-2">
                {flashcard.groupdescription}
            </p>
            <p className="font-medium text-sm text-slate-700"
            >
            {flashcard.cards ? flashcard.cards.length : 0}Cards
            </p>
            {/* button for viewing the details of flashcard */}
            <button onClick={() => navigate(`/flashcarddetails/${flashcard.groupid}`)}
                className='pay-1 px-16 text-red-600 font-bold rounded-sm border-red-600 ring-2 ring-red-600'
            >
                View Cards
            </button>
        </div>
    );
};
export default MySingleFlashCard;