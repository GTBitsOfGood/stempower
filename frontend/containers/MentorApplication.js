import React from 'react';
import SingleChoice from '../components/SingleChoice';
import TextField from '../components/TextField';
import FormProgress from '../components/FormProgress';

let q1 = "What is your name?";
let q2 = "Why are you interested in becoming a mentor for Stempower?";
let q3 = "What are some relevant experiences that would make you a good fit for mentoring?";
let q4 = "How did you hear about us?";
let q5 = "What times are you available?";
let q6 = "Please indicate your committee preference.";

class MentorApplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0
        };
        this.onNext = this.onNext.bind(this);
        this.onBack = this.onBack.bind(this);
        this.renderStepZero = this.renderStepZero.bind(this);
        this.renderStepOne = this.renderStepOne.bind(this);
    }

    onNext(){
        this.setState(Object.assign({}, this.state, {
            step: this.state.step + 1
        }))
    }

    onBack(){
        this.setState(Object.assign({}, this.state, {
            step: this.state.step - 1
        }))
    }

    render() {
        return  this.state.step === 1 ? this.renderStepOne() :
                this.state.step === 2 ? this.renderStepTwo() :
                this.state.step === 3 ? this.renderStepThree() :
                this.state.step === 4 ? this.renderStepFour() :
                this.state.step > 4 ? this.renderComplete() :
                this.renderStepZero()
    }

   renderStepZero() {
       return (
            <div style={{maxWidth:"640px"}}>
               <h1>Stempower Mentor Application</h1>
               <p>Are you interested in #raisingtheratio for women in science, technology, engineering, and math? Share your passion with young women in the Girl Scouts of Greater Atlanta by becoming a mentor for Stempower! Stempower is a non-profit mentoring program encouraging the next generation of women in STEM, and our team needs you!</p>
               <p>Mentoring includes leading a Junior Girl Scout troop through some of your favorite childhood activities, all while explaining the science behind what you observe and inspiring classroom confidence. Beyond meeting with your troop twice per month, mentors have the opportunity for engaging and connecting with one another during our weekly meetings, held on Georgia Tech's campus.</p>
               <p>The materials and lesson plans are provided in advance, and you will receive a transportation stipend if using a service such as Uber or Lyft. Mentoring culminates in a Georgia Tech event in April, where you will guide your troop through a tour of campus and laboratories!</p>
               <p>Applicants must attend Georgia Tech and identify as women. As limited positions are available, please complete this application by Friday, January 5th at 11:59pm. Interviewing will be held shortly after. If you are selected as a mentor, you must attend the following events:</p>
               <ul>
                   <li> Mentor Retreat - Saturday, January 27th or Sunday, January 28th </li>
                   <li> Mentoring Trainings - Once Each Week </li>
                   <li> Mentoring Meetings - Once Every Other Week </li>
                   <li> Georgia Tech Field Trip - Saturday, April 21st </li>
               </ul>
               <p>Have questions about our program? Contact us by emailing <a href="mailto:info@stempowerinc.org">info@stempowerinc.org</a> or visit our Facebook page, <a href="www.facebook.com/StempowerInc">www.facebook.com/StempowerInc</a>.</p>
               <img style={{marginBottom: "20px", marginTop: "20px"}} src="Stempower_Applicant_Image.jpg" style={{width:"572px", height:"391px"}}></img>
               <FormProgress onBack={this.onBack} onNext={this.onNext} step={this.state.step}/>
            </div>
       )
    }

    renderStepOne() {
        return (
            <div style={{maxWidth:"640px"}}>
                <form style={{marginBottom: "20px"}}>
                    <div className="step-banner"><p>Mentoring Interest</p></div>
                    <TextField question={q1}/>
                    <TextField question={q2}/>
                    <TextField question={q3}/>
                    <SingleChoice question={q4} name={"how-did-you-hear"}/>
                </form>
                <FormProgress onBack={this.onBack} onNext={this.onNext} step={this.state.step}/>
            </div>
        )
    }

    renderStepTwo() {
        return (
            <div style={{maxWidth:"640px"}}>
                <div className="step-banner"><p>Mentoring Availability</p></div>
                <div>
                    <p>Please list all of the times you would be available for mentoring during the upcoming semester, divided in 2.5 hour periods (1.5 hours for mentoring + 1 hour for transportation).</p>
                    <p>For example, if you have class from 11:45am - 1:00pm and from 4:30pm - 5:45pm on Tuesdays and Thursdays, you would write 9:15am - 11:45am, 1:00pm - 3:30pm, and 5:45pm - 8:15pm within the Tuesday and Thursday blocks.</p>
                    <p>Only one of these 2.5 hour periods will be selected for your mentoring meetings, which will take place once every other week.</p>
                </div>
                <div>
                    <div><label>Monday</label><br /><input type="text" /></div>
                    <div><label>Tuesday</label><br /><input type="text" /></div>
                    <div><label>Wednesday</label><br /><input type="text" /></div>
                    <div><label>Thursday</label><br /><input type="text" /></div>
                    <div><label>Friday</label><br /><input type="text" /></div>
                    <div><label>Saturday</label><br /><input type="text" /></div>
                    <div><label>Sunday</label><br /><input type="text" /></div>
                </div>
                <FormProgress onBack={this.onBack} onNext={this.onNext} step={this.state.step} />
            </div>
        )
    }

    renderStepThree() {
        return (
            <div>
                <div className="step-banner"><p>Committee Perference</p></div>
                <div>This is step three.</div>
            </div>
        )
    }

    renderStepFour() {
        return <div>This is step four.</div>
    }

    renderComplete() {
        return <div>Thank you for completing the application!</div>
    }
}

export default MentorApplication;