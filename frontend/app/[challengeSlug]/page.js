import Link from "next/link";
import styles from "./page.module.css";

export default function SingleChallengePage() {
    const challengeSlug = "aq-demo-setup";
    const challengeName = "AQ Demo";
    return (
        <>
            <h1>Setup {challengeName}</h1>
            <hr></hr>
            <p>
                Almost there - {challengeName} needs your challenge code adding
                to it.
            </p>
            <div className="boxedButton">
                <h3>Quickstart</h3>
                <p>
                    If you are looking to get setup quickly, you can initialize
                    the challenges's template repository with a README file.
                </p>
                <Link href="/create">
                    <button className="btn">initialize with README</button>
                </Link>
            </div>
            <p>
                Alternatively, you can upload existing code from your local
                machine:
            </p>
            <ul>
                <li>
                    <a>Push an existing folder on your computer</a>
                    <div className="boxedButton">
                        <h3>Pushing an existing repository</h3>
                        <hr></hr>
                        <p>
                            Inside the repository that contains your challenge
                            code, run:
                        </p>
                        <div className="codeWrapper">
                            <code>
                                git init<br></br>
                                git remote add origin
                                https://git.candidatecode.com/git/afb5183f-662e-46a4-a401-93edb775cf55/challenge-2.git
                                <br></br>
                                git add .<br></br>
                                git commit -m "Initial commit"<br></br>
                                git push -u origin master<br></br>
                            </code>
                        </div>
                        Please note this will create a new remote called{" "}
                        <b>cc</b> rather than <b>origin</b>, assuming you may
                        with to manage multiple remotes at once. If you'd rather
                        just use origin, feel free to go ahead and do so.
                    </div>
                </li>
                <li>
                    <a>Push an existing local repository</a>
                    <div className="boxedButton">
                        <h3>Pushing an existing repository</h3>
                        <hr></hr>
                        <p>
                            Inside the repository that contains your challenge
                            code, run:
                        </p>
                        <div className="codeWrapper">
                            <code>
                                git remote add cc
                                https://git.candidatecode.com/git/afb5183f-662e-46a4-a401-93edb775cf55/challenge-2.git
                                <br></br> git push -u cc --all<br></br> git push
                                -u cc --tags
                            </code>
                        </div>
                        Please note this will create a new remote called{" "}
                        <b>cc</b> rather than <b>origin</b>, assuming you may
                        with to manage multiple remotes at once. If you'd rather
                        just use origin, feel free to go ahead and do so.
                    </div>
                </li>
            </ul>
            <p>
                Once you have added some code to the master branch of the
                template repository, you will be able to{" "}
                <Link href="/">send this challenge to a candidate</Link>.
            </p>
            <hr></hr>
            <Link href={`/`}>Back to Challenges</Link>
        </>
    );
}
