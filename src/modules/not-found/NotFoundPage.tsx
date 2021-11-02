import { useState } from "react";
import { Button } from "@material-ui/core";
import Link from "next/link";
import { NavBar } from "../../ui/NavBar";
import { navLinks } from "../../ui/NavBar/NavLinks";
import { Footer } from "../../ui/Footer";

export const NotFoundPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="not-found-page">
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />

            <nav>
                <Link href="/">
                    <Button className="tts-button">TTS</Button>
                </Link>

                <div className="links">
                    {navLinks.map((link) => (
                        <Link key={link.path} href={link.path}>
                            <Button className="a">{link.name}</Button>
                        </Link>
                    ))}
                </div>

                <Button onClick={() => setIsOpen(true)} className="hamburger">
                    <img src="/assets/hamburger.svg" />
                </Button>
            </nav>

            <div className="main">
                <img src="/assets/lost.svg" className="lost desktop" alt="A picture of a lost man." />
                <h2>Oh No!</h2>
                <p>It seems you’re lost! If this is a bug please report it on GitHub.</p>
                <section className="content">
                    <Button className="issue" href="https://github.com/CreeperPlanet26/corona-project/issues/new?assignees=&labels=&template=bug_report.md&title=" target="_blank">
                        Open an Issue
                    </Button>
                </section>
                <img src="/assets/lost.svg" className="lost" alt="A picture of a lost man." />

                <div className="footer">
                    <Footer />
                </div>
            </div>
        </div>
    );
};
