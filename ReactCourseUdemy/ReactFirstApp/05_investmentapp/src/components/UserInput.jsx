export default function UserInput({onChangeInput, userInput}){

    return(
        <section id="user-input">
        <div className="input-group">
            <p>
                <label>INITIAL INVEST</label>
                <input type="number" required value={userInput.initialInvestment} onChange={(event)=>onChangeInput('initialInvestment', event.target.value)}/>
            </p>
            <p>
                <label>ANUAL INVESTMENT</label>
                <input type="number" value={userInput.annualInvestment} required onChange={(event)=>onChangeInput('annualInvestment', event.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>EXPECTED RETURN</label>
                <input type="number" required value={userInput.expectedReturn} onChange={(event)=>onChangeInput('expectedReturn', event.target.value)}/>
            </p>
            <p>
                <label>DURATION</label>
                <input type="number" required value={userInput.duration} onChange={(event)=>onChangeInput('duration', event.target.value)}/>
            </p>
        </div>
        </section>
    );
}