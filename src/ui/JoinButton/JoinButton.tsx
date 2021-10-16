import { Button } from "@material-ui/core";
import Link from "next/link";

export const inviteLink = "https://discord.gg/RNTemwY";

export const JoinButton = () => (
    <div className="join-button-ui-component">
        <Link href="/about">
            <Button variant="contained" color="primary">
                About
            </Button>
        </Link>
    </div>
);
