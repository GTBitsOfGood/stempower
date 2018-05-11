import React from 'react';

const SingleChoice = ({name, choices, question}) => {
    return (
        <div className="single-choice">
            <div>
                {question}
            </div>
            <br />
            <div>
                <input type="radio" name={name} value="Facebook" />
                <label>Facebook</label>
            </div>
            <div>
                <input type="radio" name={name} value="Previous Mentor" />
                <label>Previous Mentor</label>
            </div>

            <div>
                <input type="radio" name={name} value="Email" />
                <label>Email</label>
            </div>
            <div>
                <input type="radio" name={name} value="Flyer" />
                <label>Flyer</label>
            </div>
            <div>
                <input type="radio" name={name} value="Daily Digest" />
                <label>Daily Digest</label>
            </div>
            <div>
                <input type="radio" name={name} value="Weekly Digest" />
                <label>Weekly Digest</label>
            </div>
            <div>
                <input type="radio" name={name} value="Facebook" />
                <label>Facebook</label>
            </div>
            <div>
                <input type="radio" name={name} value="Other" />
                <label>Other</label>
                <input type="text" style={{marginLeft:"10px"}} />
            </div>
        </div>
    )
}

//Abstracting out the radio buttons can be for another day.

// const Choices = ({choices}) => {
//     return
// })

export default SingleChoice;