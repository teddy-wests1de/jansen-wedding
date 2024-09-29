function RSVP() {

    return(
        <div className="grid">
        <h2>RSVP</h2>
        <p>We'd love for you to join us in celebrating our love. Please note that only RSVP's from invited guests will count and RSVP's from uninvited geust will Unfortunately not be entertained.</p>
        <p>RSVP by 10 January 2025</p>
        <form className="rsvp-form">
            <div className="form-row">
                <div className="form-field">
                    <label>Name*</label>
                    <input type="text" placeholder="Please input Guest Name..."></input>
                </div>
                <div className="form-field">
                    <label>Contact*</label>
                    <input type="text" placeholder="Please input your telephone Number..."></input>
                </div>
            </div>
            
            <div className="form-row">
                <div className="form-field">
                    <label>
                        <input type="radio" name="answer" value='Yes'/>Yes, I'm definitely there...!
                    </label>
                </div>
                <div className="form-field">
                    <label>
                        <input type="radio" name="answer" value='No'/>Sorry, Unfortunately I'm not attending. 
                    </label>
                </div>
            </div>
            <div className="form-row">
                <button className="btn-primary">Submit</button>
            </div>
        </form>
        </div>
    )
}

export default RSVP;