import { useRouteError } from "react-router-dom";


// Error page component
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, this page doesn't exist.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={() => window.location.href = '/'}>Go Home</button>
        </div>
    );


}