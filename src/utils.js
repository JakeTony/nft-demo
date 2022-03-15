const getIpfsURL = (url) => {
	return "https://ipfs.io/ipfs/" + url.split("//")[1];
};

export default getIpfsURL;
