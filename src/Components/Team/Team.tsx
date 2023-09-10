import "./Team.module.css";

import image from "../../assets/images/team1.svg";
import line from "../../assets/images/line.png";
import line2 from "../../assets/images/line2.png";


const Team = () => {
    return (
        <div className="team-wrapper" id="team" data-aos="fade-up">
            <h1>Our Team</h1>
            <div className="team-body-wrapper">
                <div className="team-bg-line-wrapper">
                    <img src={line} alt="" />
                    <img src={line2} alt="" />
                    <img src={line} alt="" />
                    <img src={line2} alt="" />
                </div>
                <div className="team-members-details-wrapper">
                    <div className="team team1">
                        <div className="team1-img">
                            <img
                                className="team-image-individual"
                                src={image}
                            />
                        </div>
                        <div className="team-name-designation">
                            <div className="team-member-name">
                                Enric S Neelamkavil
                            </div>
                            <div className="team-member-designation">
                                Campus Lead
                            </div>
                        </div>
                    </div>
                    <div className="team team2">
                        <div className="team1-img">
                            <img
                                className="team-image-individual"
                                src={image}
                            />
                        </div>
                        <div className="team-name-designation">
                            <div className="team-member-name">
                                Enric S Neelamkavil
                            </div>
                            <div className="team-member-designation">
                                Campus Lead
                            </div>
                        </div>
                    </div>
                    <div className="team team3">
                        <div className="team1-img">
                            <img
                                className="team-image-individual"
                                src={image}
                            />
                        </div>
                        <div className="team-name-designation">
                            <div className="team-member-name">
                                Enric S Neelamkavil
                            </div>
                            <div className="team-member-designation">
                                Campus Lead
                            </div>
                        </div>
                    </div>
                    <div className="team team4">
                        <div className="team1-img">
                            <img
                                className="team-image-individual"
                                src={image}
                            />
                        </div>
                        <div className="team-name-designation">
                            <div className="team-member-name">
                                Enric S Neelamkavil
                            </div>
                            <div className="team-member-designation">
                                Campus Lead
                            </div>
                        </div>
                    </div>
                    <div className="team team5">
                        <div className="team1-img">
                            <img
                                className="team-image-individual"
                                src={image}
                            />
                        </div>
                        <div className="team-name-designation">
                            <div className="team-member-name">
                                Enric S Neelamkavil
                            </div>
                            <div className="team-member-designation">
                                Campus Lead
                            </div>
                        </div>
                    </div>
                    <div className="team team6">
                        <div className="team1-img">
                            <img
                                className="team-image-individual"
                                src={image}
                            />
                        </div>
                        <div className="team-name-designation">
                            <div className="team-member-name">
                                Enric S Neelamkavil
                            </div>
                            <div className="team-member-designation">
                                Campus Lead
                            </div>
                        </div>
                    </div>
                    <div className="team team7">
                        <div className="team1-img">
                            <img
                                className="team-image-individual"
                                src={image}
                            />
                        </div>
                        <div className="team-name-designation">
                            <div className="team-member-name">
                                Enric S Neelamkavil
                            </div>
                            <div className="team-member-designation">
                                Campus Lead
                            </div>
                        </div>
                    </div>
                    <div className="team team8">
                        <div className="team1-img">
                            <img
                                className="team-image-individual"
                                src={image}
                            />
                        </div>
                        <div className="team-name-designation">
                            <div className="team-member-name">
                                Enric S Neelamkavil
                            </div>
                            <div className="team-member-designation">
                                Campus Lead
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;