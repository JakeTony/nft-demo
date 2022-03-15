import React, { useEffect, useState } from "react";
import "./main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import getIpfsURL from "../utils";

const Main = ({ selectedPunk, punkListData }) => {
	const [activePunk, setActivePunk] = useState(punkListData[0]);

	useEffect(() => {
		setActivePunk(punkListData.filter((everyPunk) => everyPunk.token_id === selectedPunk)[0]);
	}, [punkListData, selectedPunk]);

	return (
		<div className="main">
			<div className="mainContent">
				<div className="punkHighlight">
					<div className="punkContainer">
						<img className="selectedPunk" src={getIpfsURL(activePunk.image_original_url)} alt="Main character" />
					</div>
				</div>

				<div className="punkDetails">
					<div className="title">
						{activePunk.name}
						<span className="itemNumber">•#{activePunk.token_id}</span>
					</div>
					<div className="owner">
						<div className="ownerImageContainer">
							<img src={activePunk.owner.profile_img_url} alt="punk highligth" />
						</div>
						<div className="ownerDetails">
							<div className="ownerNameAndHandle">
								<div>{activePunk.owner.address}</div>
								<div className="ownerHandle">@chrisDevBlog</div>
							</div>
							<div className="ownerLink">
								<img src={instagramLogo} alt="" />
							</div>
							<div className="ownerLink">
								<img src={twitterLogo} alt="" />
							</div>
							<div className="ownerLink">
								<img src={moreIcon} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
