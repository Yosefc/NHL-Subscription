import React from 'react';
import { getTeams } from "../teams";

const SubscriptionBox = ({ path }) => {
    const btnText = _ => path.match(/home/) ? "Subscribe" : "Unsubcribe"
    return (
        <div>
            <form>
                <div>
                    <select>
                        <option value="Choose Teams">Choose Teams</option>
                        <SelectOptions />
                    </select>
                </div>
                <input type="email" placeholder="Enter email" />
                <button>{btnText()}</button>
            </form>
        </div>
    )
}

const SelectOptions = () => getTeams().map(team => <option key={team.id} value={team.id}>{team.name}</option>);

export default SubscriptionBox