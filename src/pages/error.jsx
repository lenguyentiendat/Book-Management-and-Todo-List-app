import { Link, useRouteError } from "react-router-dom";
import { Button, Result } from 'antd'


export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div >
            <Result
                status="404"
                title="Oops!"
                subTitle={error.statusText || error.message}
                extra={<Button type="primary">
                    <Link to="/">
                        <span >Back to Homepage</span>
                    </Link>
                </Button>}
            />
        </div >
    );
}