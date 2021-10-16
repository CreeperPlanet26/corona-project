import { Button } from "@material-ui/core";
import Link from "next/link"

export const LoginButton = () => (
    <div className="login-button-ui-component">
        <Link href="/dashboard">
            <Button variant="contained" color="primary" >
                View
            </Button>
        </Link>
    </div>
);
