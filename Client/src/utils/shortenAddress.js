// function that acceptes an address and returns a  template string
export const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`