import React from 'react';
import SubscriptionBox from "./SubscriptionBox";

const SubscriptionPage = () => {
    return (
        <div>
            <section>
                <p>
                    Have you been having trouble getting updates about the hockey games you care about?
                    <br />
                    Sign Up below to get update for you favorite teams. We will send you an email with all of the important updates when your team plays a game.
                </p>
            </section>
            <SubscriptionBox path={window.location.pathname} />
        </div>
    )
}

export default SubscriptionPage